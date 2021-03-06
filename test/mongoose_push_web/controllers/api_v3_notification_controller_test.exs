defmodule MongoosePushWeb.APIv3NotificationControllerTest do
  alias MongoosePushWeb.Support.ControllersHelper
  alias MongoosePushWeb.Support.RequestsGenerator
  use ExUnitProperties
  use MongoosePushWeb.ConnCase, async: true
  import Mox

  setup :verify_on_exit!

  setup %{conn: conn} do
    new_conn = put_req_header(conn, "content-type", "application/json")
    %{spec: MongoosePushWeb.ApiSpec.spec(), conn: new_conn}
  end

  test "correct Request.SendNotification.Deep.AlertNotification schema", %{conn: conn} do
    expect(MongoosePush.Notification.MockImpl, :push, fn _id, _req -> :ok end)

    conn = post(conn, "/v3/notification/123456", Jason.encode!(ControllersHelper.alert_request()))
    assert json_response(conn, 200) == nil
  end

  @dropped_fields ["service", "alert"]
  for dropped <- @dropped_fields do
    test "Request.SendNotification.Deep.AlertNotification schema without required #{dropped} field",
         %{
           conn: conn
         } do
      body =
        ControllersHelper.alert_request()
        |> Map.drop([unquote(dropped)])
        |> Jason.encode!()

      conn = post(conn, "/v3/notification/123456", body)

      assert json_response(conn, 422) ==
               ControllersHelper.missing_field_response(:v3, unquote(dropped))
    end
  end

  test "Request.SendNotification.Deep.AlertNotification schema with incorrect priority value", %{
    conn: conn
  } do
    body =
      ControllersHelper.alert_request()
      |> Map.put("priority", "the highest in the world")
      |> Jason.encode!()

    conn = post(conn, "/v3/notification/123456", body)
    assert json_response(conn, 422) == ControllersHelper.invalid_value_for_enum("priority")
  end

  test "Request.SendNotification.Deep.AlertNotification schema with unexpected field", %{
    conn: conn
  } do
    body =
      ControllersHelper.alert_request()
      |> Map.put("field", "peek-a-boo")
      |> Jason.encode!()

    conn = post(conn, "/v2/notification/123456", body)

    assert json_response(conn, 422) == ControllersHelper.unexpected_field_response("field")
  end

  test "correct Request.SendNotification.Deep.SilentNotification schema", %{conn: conn} do
    expect(MongoosePush.Notification.MockImpl, :push, fn _id, _req -> :ok end)

    conn =
      post(conn, "/v3/notification/123456", Jason.encode!(ControllersHelper.silent_request()))

    assert json_response(conn, 200) == nil
  end

  @dropped_fields [{"service", "service"}, {"data", "alert"}]
  for {dropped, missing} <- @dropped_fields do
    test "Request.SendNotification.Deep.SilentNotification schema without required #{missing} field",
         %{
           conn: conn
         } do
      body =
        ControllersHelper.silent_request()
        |> Map.drop([unquote(dropped)])
        |> Jason.encode!()

      conn = post(conn, "/v3/notification/123456", body)

      assert json_response(conn, 422) ==
               ControllersHelper.missing_field_response(:v3, unquote(missing))
    end
  end

  test "Request.SendNotification.Deep.SilentNotification schema with incorrect time_to_live value",
       %{
         conn: conn
       } do
    body =
      ControllersHelper.silent_request()
      |> Map.put("time_to_live", "infinity")
      |> Jason.encode!()

    conn = post(conn, "/v3/notification/123456", body)

    assert json_response(conn, 422) ==
             ControllersHelper.invalid_field_response("integer", "string", "time_to_live")
  end

  test "Request.SendNotification.Deep.SilentNotification schema with unexpected field", %{
    conn: conn
  } do
    body =
      ControllersHelper.silent_request()
      |> Map.put("field", "peek-a-boo")
      |> Jason.encode!()

    conn = post(conn, "/v3/notification/123456", body)
    assert json_response(conn, 422) == ControllersHelper.unexpected_field_response("field")
  end

  test "empty request", %{
    conn: conn
  } do
    conn =
      post(
        conn,
        "/v3/notification/654321",
        Jason.encode!(%{})
      )

    assert json_response(conn, 422) ==
             Map.merge(
               ControllersHelper.missing_field_response(:v3, "service"),
               ControllersHelper.missing_field_response(:v3, "alert"),
               fn _k, v1, v2 -> v1 ++ v2 end
             )
  end

  # Service.error() errors

  test "invalid request error", %{conn: conn} do
    post_and_assert_error(conn, 400, {:invalid_request, :BadCollapseId}, :invalid_request)
  end

  test "unregistered error", %{conn: conn} do
    post_and_assert_error(conn, 410, {:unregistered, :Unregistered}, :unregistered)
  end

  test "payload too large error", %{conn: conn} do
    post_and_assert_error(conn, 413, {:payload_too_large, :PayloadTooLarge}, :payload_too_large)
  end

  test "too many requests error", %{conn: conn} do
    post_and_assert_error(conn, 429, {:too_many_requests, :TooManyRequests}, :too_many_requests)
  end

  test "service internal error", %{conn: conn} do
    post_and_assert_error(conn, 503, {:service_internal, :ServiceUnavailable}, :service_internal)
  end

  test "auth error", %{conn: conn} do
    post_and_assert_error(conn, 503, {:auth, :BadCertificate}, :service_internal)
  end

  test "internal config error", %{conn: conn} do
    post_and_assert_error(conn, 503, {:internal_config, :DuplicateHeaders}, :internal_config)
  end

  test "unspecified error", %{conn: conn} do
    post_and_assert_error(conn, 520, {:unspecified, :Unspecified}, :unspecified)
  end

  # MongoosePush.error() errors

  test "generic no matching pool error", %{conn: conn} do
    post_and_assert_error(conn, 400, {:generic, :no_matching_pool}, :no_matching_pool)
  end

  test "generic unable to connect error", %{conn: conn} do
    post_and_assert_error(conn, 503, {:generic, :unable_to_connect}, :unable_to_connect)
  end

  test "generic connection lost error", %{conn: conn} do
    post_and_assert_error(conn, 503, {:generic, :connection_lost}, :connection_lost)
  end

  test "generic invalid notification error", %{conn: conn} do
    post_and_assert_error(conn, 400, {:generic, :invalid_notification}, :invalid_notification)
  end

  test "generic unspecified error", %{conn: conn} do
    post_and_assert_error(conn, 500, {:generic, :unspecified}, :unspecified)
  end

  # decoder tests

  test "AlertNotification decoder test: all possible fields", %{conn: conn} do
    device_id = "1"
    expected_device_id = "1"

    request = %{
      "service" => "apns",
      "mode" => "prod",
      "priority" => "normal",
      "time_to_live" => 3600,
      "mutable_content" => false,
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "badge" => 7,
        "click_action" => ".SomeApp.Handler.action",
        "tag" => "info",
        "sound" => "standard.mp3"
      }
    }

    expected_request = %{
      alert: %{
        badge: 7,
        body: "A message from someone",
        click_action: ".SomeApp.Handler.action",
        sound: "standard.mp3",
        tag: "info",
        title: "Notification title"
      },
      mode: :prod,
      service: :apns,
      topic: "com.someapp",
      priority: :normal,
      time_to_live: 3600,
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: all required fields", %{conn: conn} do
    device_id = "2"
    expected_device_id = "2"

    request = %{
      "service" => "fcm",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      service: :fcm,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: alert.badge + alert.click_action fields", %{conn: conn} do
    device_id = "3"
    expected_device_id = "3"

    request = %{
      "service" => "apns",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "badge" => 7,
        "click_action" => ".SomeApp.Handler.action"
      }
    }

    expected_request = %{
      alert: %{
        badge: 7,
        body: "A message from someone",
        click_action: ".SomeApp.Handler.action",
        title: "Notification title"
      },
      service: :apns,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: alert.tag + alert.sound fields", %{conn: conn} do
    device_id = "4"
    expected_device_id = "4"

    request = %{
      "service" => "fcm",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "tag" => "info",
        "sound" => "standard.mp3"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        sound: "standard.mp3",
        tag: "info",
        title: "Notification title"
      },
      service: :fcm,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: time_to_live + mutable_content fields", %{conn: conn} do
    device_id = "5"
    expected_device_id = "5"

    request = %{
      "service" => "apns",
      "time_to_live" => 3600,
      "mutable_content" => true,
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      service: :apns,
      time_to_live: 3600,
      mutable_content: true
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: tags + topic fields", %{conn: conn} do
    device_id = "6"
    expected_device_id = "6"

    request = %{
      "service" => "apns",
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      service: :apns,
      topic: "com.someapp",
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: mode :prod + priority :high fields", %{conn: conn} do
    device_id = "7"
    expected_device_id = "7"

    request = %{
      "service" => "fcm",
      "mode" => "prod",
      "priority" => "high",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      mode: :prod,
      service: :fcm,
      priority: :high,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "AlertNotification decoder test: mode :dev + priority :normal fields", %{conn: conn} do
    device_id = "8"
    expected_device_id = "8"

    request = %{
      "service" => "apns",
      "mode" => "dev",
      "priority" => "normal",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      }
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      mode: :dev,
      service: :apns,
      priority: :normal,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: all possible fields", %{conn: conn} do
    device_id = "9"
    expected_device_id = "9"

    request = %{
      "service" => "apns",
      "mode" => "prod",
      "priority" => "normal",
      "time_to_live" => 3600,
      "mutable_content" => false,
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp",
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      data: %{"acme1" => "value1", "acme2" => "value2"},
      mode: :prod,
      service: :apns,
      topic: "com.someapp",
      priority: :normal,
      time_to_live: 3600,
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: all required fields", %{conn: conn} do
    device_id = "10"
    expected_device_id = "10"

    request = %{
      "service" => "apns",
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      service: :apns,
      data: %{"acme1" => "value1", "acme2" => "value2"},
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: time_to_live + mutable_content fields", %{conn: conn} do
    device_id = "11"
    expected_device_id = "11"

    request = %{
      "service" => "apns",
      "data" => %{"acme1" => "value1", "acme2" => "value2"},
      "time_to_live" => 3600,
      "mutable_content" => true
    }

    expected_request = %{
      service: :apns,
      data: %{"acme1" => "value1", "acme2" => "value2"},
      time_to_live: 3600,
      mutable_content: true
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: tags + topic fields", %{conn: conn} do
    device_id = "12"
    expected_device_id = "12"

    request = %{
      "service" => "apns",
      "data" => %{"acme1" => "value1", "acme2" => "value2"},
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp"
    }

    expected_request = %{
      service: :apns,
      data: %{"acme1" => "value1", "acme2" => "value2"},
      topic: "com.someapp",
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: mode :prod + priority :high fields", %{conn: conn} do
    device_id = "13"
    expected_device_id = "13"

    request = %{
      "service" => "fcm",
      "data" => %{"acme1" => "value1", "acme2" => "value2"},
      "mode" => "prod",
      "priority" => "high"
    }

    expected_request = %{
      mode: :prod,
      service: :fcm,
      data: %{"acme1" => "value1", "acme2" => "value2"},
      priority: :high,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "SilentNotification decoder test: mode :dev + priority :normal fields", %{conn: conn} do
    device_id = "14"
    expected_device_id = "14"

    request = %{
      "service" => "apns",
      "data" => %{"acme1" => "value1", "acme2" => "value2"},
      "mode" => "dev",
      "priority" => "normal"
    }

    expected_request = %{
      mode: :dev,
      service: :apns,
      data: %{"acme1" => "value1", "acme2" => "value2"},
      priority: :normal,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: all possible fields", %{conn: conn} do
    device_id = "15"
    expected_device_id = "15"

    request = %{
      "service" => "fcm",
      "mode" => "prod",
      "priority" => "normal",
      "time_to_live" => 3600,
      "mutable_content" => false,
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "badge" => 7,
        "click_action" => ".SomeApp.Handler.action",
        "tag" => "info",
        "sound" => "standard.mp3"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        badge: 7,
        body: "A message from someone",
        click_action: ".SomeApp.Handler.action",
        sound: "standard.mp3",
        tag: "info",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      mode: :prod,
      service: :fcm,
      topic: "com.someapp",
      priority: :normal,
      time_to_live: 3600,
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: all required fields", %{conn: conn} do
    device_id = "16"
    expected_device_id = "16"

    request = %{
      "service" => "apns",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "badge" => 7,
        "click_action" => ".SomeApp.Handler.action",
        "tag" => "info",
        "sound" => "standard.mp3"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        badge: 7,
        body: "A message from someone",
        click_action: ".SomeApp.Handler.action",
        sound: "standard.mp3",
        tag: "info",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      service: :apns,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: alert.badge + alert.click_action fields", %{conn: conn} do
    device_id = "17"
    expected_device_id = "17"

    request = %{
      "service" => "fcm",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "badge" => 7,
        "click_action" => ".SomeApp.Handler.action"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        badge: 7,
        body: "A message from someone",
        click_action: ".SomeApp.Handler.action",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      service: :fcm,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: alert.tag + alert.sound fields", %{conn: conn} do
    device_id = "18"
    expected_device_id = "18"

    request = %{
      "service" => "apns",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title",
        "tag" => "info",
        "sound" => "standard.mp3"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        sound: "standard.mp3",
        tag: "info",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      service: :apns,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: time_to_live + mutable_content fields", %{conn: conn} do
    device_id = "19"
    expected_device_id = "19"

    request = %{
      "service" => "fcm",
      "time_to_live" => 3600,
      "mutable_content" => true,
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      service: :fcm,
      time_to_live: 3600,
      mutable_content: true
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: tags + topic fields", %{conn: conn} do
    device_id = "20"
    expected_device_id = "20"

    request = %{
      "service" => "apns",
      "tags" => ["some", "tags", "for", "pool", "selection"],
      "topic" => "com.someapp",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      service: :apns,
      topic: "com.someapp",
      mutable_content: false,
      tags: ["some", "tags", "for", "pool", "selection"]
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: mode :prod + priority :high fields", %{conn: conn} do
    device_id = "21"
    expected_device_id = "21"

    request = %{
      "service" => "fcm",
      "mode" => "prod",
      "priority" => "high",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      mode: :prod,
      service: :fcm,
      priority: :high,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  test "MixedNotification decoder test: mode :dev + priority :normal fields", %{conn: conn} do
    device_id = "22"
    expected_device_id = "22"

    request = %{
      "service" => "apns",
      "mode" => "dev",
      "priority" => "normal",
      "alert" => %{
        "body" => "A message from someone",
        "title" => "Notification title"
      },
      "data" => %{"acme1" => "value1", "acme2" => "value2"}
    }

    expected_request = %{
      alert: %{
        body: "A message from someone",
        title: "Notification title"
      },
      data: %{"acme1" => "value1", "acme2" => "value2"},
      mode: :dev,
      service: :apns,
      priority: :normal,
      mutable_content: false
    }

    post_and_assert(conn, device_id, expected_device_id, request, expected_request)
  end

  property "APIv3 notification decoder property-based test", %{conn: conn} do
    check all(
            mandatory <- RequestsGenerator.mandatory_fields(),
            optionals <- RequestsGenerator.optional_fields(),
            device_id <- RequestsGenerator.device_id()
          ) do
      request = Map.merge(mandatory, optionals, fn _k, v1, v2 -> Map.merge(v1, v2) end)
      expected_device_id = device_id
      expected_request = create_expected_request(request)
      post_and_assert(conn, device_id, expected_device_id, request, expected_request)
    end
  end

  property "APIv3 notification with dropped one mandatory field", %{conn: conn} do
    check all(
            mandatory <- RequestsGenerator.mandatory_fields(),
            optionals <- RequestsGenerator.optional_fields(),
            device_id <- RequestsGenerator.device_id(),
            dropped <- RequestsGenerator.mandatory_field()
          ) do
      request =
        Map.merge(mandatory, optionals, fn _k, v1, v2 -> Map.merge(v1, v2) end)
        |> drop_field(dropped)

      conn = post(conn, "/v3/notification/#{device_id}", Jason.encode!(request))
      assert json_response(conn, 422) == ControllersHelper.missing_field_response(:v3, dropped)
    end
  end

  defp post_and_assert(conn, device_id, expected_device_id, request, expected_request) do
    expect(MongoosePush.Notification.MockImpl, :push, fn device_id, request ->
      assert request == expected_request
      assert device_id == expected_device_id
      :ok
    end)

    post(conn, "/v3/notification/#{device_id}", Jason.encode!(request))
  end

  defp post_and_assert_error(conn, number, {type, reason}, error_reason) do
    device_id = "666"
    request = ControllersHelper.alert_request()

    expect(MongoosePush.Notification.MockImpl, :push, fn _device_id, _request ->
      {:error, {type, reason}}
    end)

    conn = post(conn, "/v3/notification/#{device_id}", Jason.encode!(request))

    assert json_response(conn, number) == %{"reason" => to_string(error_reason)}
  end

  defp create_expected_request(request) do
    %{
      alert: fetch_alert(request["alert"]),
      data: request["data"],
      mode: fetch_enum_field(request["mode"]),
      service: fetch_enum_field(request["service"]),
      priority: fetch_enum_field(request["priority"]),
      mutable_content: fetch_mutable_content(request["mutable_content"]),
      tags: request["tags"],
      topic: request["topic"],
      time_to_live: request["time_to_live"]
    }
    |> drop_nil_values()
  end

  defp fetch_alert(alert) do
    %{
      body: alert["body"],
      title: alert["title"],
      badge: alert["badge"],
      click_action: alert["click_action"],
      tag: alert["tag"],
      sound: alert["sound"]
    }
    |> drop_nil_values()
  end

  defp fetch_enum_field(nil), do: nil
  defp fetch_enum_field(string), do: String.to_existing_atom(string)

  defp fetch_mutable_content(nil), do: false
  defp fetch_mutable_content(val), do: val

  defp drop_nil_values(map) do
    map
    |> Enum.filter(fn {_, v} -> v != nil end)
    |> Map.new()
  end

  defp drop_field(map, field) when field in ["body", "title"] do
    Kernel.update_in(map, ["alert"], fn _ -> Map.drop(map["alert"], [field]) end)
  end

  defp drop_field(map, field) do
    Map.drop(map, [field])
  end
end
