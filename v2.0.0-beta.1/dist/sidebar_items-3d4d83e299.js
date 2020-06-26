sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"},{"anchor":"mix-tasks","id":"Mix Tasks"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"quick-start","id":"Quick start"},{"anchor":"configuration","id":"Configuration"},{"anchor":"restful-api","id":"RESTful API"}],"id":"readme","title":"MongoosePush"}],"modules":[{"group":"","id":"MongoosePush","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:alert/0","id":"alert/0"},{"anchor":"t:alert_key/0","id":"alert_key/0"},{"anchor":"t:data/0","id":"data/0"},{"anchor":"t:data_key/0","id":"data_key/0"},{"anchor":"t:error/0","id":"error/0"},{"anchor":"t:mode/0","id":"mode/0"},{"anchor":"t:req_key/0","id":"req_key/0"},{"anchor":"t:request/0","id":"request/0"},{"anchor":"t:service/0","id":"service/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"push/2","id":"push/2"}]}],"title":"MongoosePush"},{"group":"","id":"MongoosePush.API","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:to_status/1","id":"to_status/1"}]}],"title":"MongoosePush.API"},{"group":"","id":"MongoosePush.API.V1.ResponseEncoder","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"to_status/1","id":"to_status/1"}]}],"title":"MongoosePush.API.V1.ResponseEncoder"},{"group":"","id":"MongoosePush.API.V2.ResponseEncoder","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"to_status/1","id":"to_status/1"}]}],"title":"MongoosePush.API.V2.ResponseEncoder"},{"group":"","id":"MongoosePush.API.V3.ResponseEncoder","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"to_status/1","id":"to_status/1"}]}],"title":"MongoosePush.API.V3.ResponseEncoder"},{"group":"","id":"MongoosePush.Config.Provider.Confex","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"init/1","id":"init/1"}]}],"title":"MongoosePush.Config.Provider.Confex"},{"group":"","id":"MongoosePush.Config.Provider.Toml","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"init/1","id":"init/1"},{"anchor":"update_sysconfig/2","id":"update_sysconfig/2"}]}],"title":"MongoosePush.Config.Provider.Toml"},{"group":"","id":"MongoosePush.Config.Utils","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"parse_bind_addr/1","id":"parse_bind_addr/1"}]}],"title":"MongoosePush.Config.Utils"},{"group":"","id":"MongoosePush.Logger.Common","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"flatten_metadata/1","id":"flatten_metadata/1"}]}],"title":"MongoosePush.Logger.Common"},{"group":"","id":"MongoosePush.Logger.JSON","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"format/4","id":"format/4"}]}],"title":"MongoosePush.Logger.JSON"},{"group":"","id":"MongoosePush.Logger.LogFmt","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"format/4","id":"format/4"}]}],"title":"MongoosePush.Logger.LogFmt"},{"group":"","id":"MongoosePush.Metrics.TelemetryMetrics","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"metrics/0","id":"metrics/0"},{"anchor":"periodic_measurements/0","id":"periodic_measurements/0"},{"anchor":"pooler/0","id":"pooler/0"},{"anchor":"running_pools/0","id":"running_pools/0"}]}],"title":"MongoosePush.Metrics.TelemetryMetrics"},{"group":"","id":"MongoosePush.Service","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:error/0","id":"error/0"},{"anchor":"t:error_reason/0","id":"error_reason/0"},{"anchor":"t:error_type/0","id":"error_type/0"},{"anchor":"t:notification/0","id":"notification/0"},{"anchor":"t:options/0","id":"options/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:choose_pool/2","id":"choose_pool/2"},{"anchor":"c:prepare_notification/3","id":"prepare_notification/3"},{"anchor":"c:push/4","id":"push/4"},{"anchor":"c:supervisor_entry/1","id":"supervisor_entry/1"}]}],"title":"MongoosePush.Service"},{"group":"","id":"MongoosePush.Service.APNS","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"choose_pool/2","id":"choose_pool/2"},{"anchor":"prepare_notification/3","id":"prepare_notification/3"},{"anchor":"push/4","id":"push/4"},{"anchor":"supervisor_entry/1","id":"supervisor_entry/1"},{"anchor":"unify_error/1","id":"unify_error/1"}]}],"title":"MongoosePush.Service.APNS"},{"group":"","id":"MongoosePush.Service.APNS.ErrorHandler","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"translate_error_reason/1","id":"translate_error_reason/1"}]}],"title":"MongoosePush.Service.APNS.ErrorHandler"},{"group":"","id":"MongoosePush.Service.APNS.State","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"get_default_topic/1","id":"get_default_topic/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"title":"MongoosePush.Service.APNS.State"},{"group":"","id":"MongoosePush.Service.APNS.Supervisor","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"title":"MongoosePush.Service.APNS.Supervisor"},{"group":"","id":"MongoosePush.Service.FCM","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"choose_pool/2","id":"choose_pool/2"},{"anchor":"prepare_notification/3","id":"prepare_notification/3"},{"anchor":"push/4","id":"push/4"},{"anchor":"supervisor_entry/1","id":"supervisor_entry/1"},{"anchor":"unify_error/1","id":"unify_error/1"}]}],"title":"MongoosePush.Service.FCM"},{"group":"","id":"MongoosePush.Service.FCM.ErrorHandler","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"translate_error_reason/1","id":"translate_error_reason/1"}]}],"title":"MongoosePush.Service.FCM.ErrorHandler"},{"group":"","id":"MongoosePush.Service.FCM.Pool.Supervisor","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"title":"MongoosePush.Service.FCM.Pool.Supervisor"},{"group":"","id":"MongoosePush.Service.FCM.Pools","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"pool_size/2","id":"pool_size/2"},{"anchor":"pools_by_mode/0","id":"pools_by_mode/0"},{"anchor":"select_worker/0","id":"select_worker/0"},{"anchor":"worker_name/3","id":"worker_name/3"}]}],"title":"MongoosePush.Service.FCM.Pools"},{"group":"","id":"MongoosePushWeb","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__using__/1","id":"__using__/1"},{"anchor":"controller/0","id":"controller/0"},{"anchor":"router/0","id":"router/0"}]}],"title":"MongoosePushWeb"},{"group":"","id":"MongoosePushWeb.APIv1.NotificationController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"open_api_operation/1","id":"open_api_operation/1"},{"anchor":"send/2","id":"send/2"},{"anchor":"send_operation/0","id":"send_operation/0"}]}],"title":"MongoosePushWeb.APIv1.NotificationController"},{"group":"","id":"MongoosePushWeb.APIv2.NotificationController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"open_api_operation/1","id":"open_api_operation/1"},{"anchor":"send/2","id":"send/2"},{"anchor":"send_operation/0","id":"send_operation/0"}]}],"title":"MongoosePushWeb.APIv2.NotificationController"},{"group":"","id":"MongoosePushWeb.APIv3.NotificationController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"open_api_operation/1","id":"open_api_operation/1"},{"anchor":"send/2","id":"send/2"},{"anchor":"send_operation/0","id":"send_operation/0"}]}],"title":"MongoosePushWeb.APIv3.NotificationController"},{"group":"","id":"MongoosePushWeb.ApiSpec","title":"MongoosePushWeb.ApiSpec"},{"group":"","id":"MongoosePushWeb.Endpoint","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"broadcast/3","id":"broadcast/3"},{"anchor":"broadcast!/3","id":"broadcast!/3"},{"anchor":"broadcast_from/4","id":"broadcast_from/4"},{"anchor":"broadcast_from!/4","id":"broadcast_from!/4"},{"anchor":"call/2","id":"call/2"},{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"config/2","id":"config/2"},{"anchor":"config_change/2","id":"config_change/2"},{"anchor":"host/0","id":"host/0"},{"anchor":"init/1","id":"init/1"},{"anchor":"instrument/3","id":"instrument/3"},{"anchor":"path/1","id":"path/1"},{"anchor":"script_name/0","id":"script_name/0"},{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"static_integrity/1","id":"static_integrity/1"},{"anchor":"static_lookup/1","id":"static_lookup/1"},{"anchor":"static_path/1","id":"static_path/1"},{"anchor":"static_url/0","id":"static_url/0"},{"anchor":"struct_url/0","id":"struct_url/0"},{"anchor":"subscribe/1","id":"subscribe/1"},{"anchor":"subscribe/3","id":"subscribe/3"},{"anchor":"unsubscribe/1","id":"unsubscribe/1"},{"anchor":"url/0","id":"url/0"}]}],"title":"MongoosePushWeb.Endpoint"},{"group":"","id":"MongoosePushWeb.Plug.CastAndValidate","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"get_operation/1","id":"get_operation/1"}]}],"title":"MongoosePushWeb.Plug.CastAndValidate"},{"group":"","id":"MongoosePushWeb.Plug.CastAndValidate.StubAdapter","title":"MongoosePushWeb.Plug.CastAndValidate.StubAdapter"},{"group":"","id":"MongoosePushWeb.Plug.MaybePutSwaggerUI","title":"MongoosePushWeb.Plug.MaybePutSwaggerUI"},{"group":"","id":"MongoosePushWeb.Plug.MaybeRenderSpec","title":"MongoosePushWeb.Plug.MaybeRenderSpec"},{"group":"","id":"MongoosePushWeb.PrometheusMetricsController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"send/2","id":"send/2"}]}],"title":"MongoosePushWeb.PrometheusMetricsController"},{"group":"","id":"MongoosePushWeb.Protocols.RequestDecoder","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"decode/1","id":"decode/1"}]}],"title":"MongoosePushWeb.Protocols.RequestDecoder"},{"group":"","id":"MongoosePushWeb.Protocols.RequestDecoderHelper","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_optional_fields/2","id":"add_optional_fields/2"},{"anchor":"maybe_parse_to_atom/2","id":"maybe_parse_to_atom/2"},{"anchor":"parse_service/1","id":"parse_service/1"}]}],"title":"MongoosePushWeb.Protocols.RequestDecoderHelper"},{"group":"","id":"MongoosePushWeb.Router","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"api/2","id":"api/2"},{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"},{"anchor":"swagger_json/2","id":"swagger_json/2"}]}],"title":"MongoosePushWeb.Router"},{"group":"","id":"MongoosePushWeb.Router.Helpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"maybe_put_swagger_ui_path/2","id":"maybe_put_swagger_ui_path/2"},{"anchor":"maybe_put_swagger_ui_path/3","id":"maybe_put_swagger_ui_path/3"},{"anchor":"maybe_put_swagger_ui_url/2","id":"maybe_put_swagger_ui_url/2"},{"anchor":"maybe_put_swagger_ui_url/3","id":"maybe_put_swagger_ui_url/3"},{"anchor":"maybe_render_spec_path/2","id":"maybe_render_spec_path/2"},{"anchor":"maybe_render_spec_path/3","id":"maybe_render_spec_path/3"},{"anchor":"maybe_render_spec_url/2","id":"maybe_render_spec_url/2"},{"anchor":"maybe_render_spec_url/3","id":"maybe_render_spec_url/3"},{"anchor":"notification_path/3","id":"notification_path/3"},{"anchor":"notification_path/4","id":"notification_path/4"},{"anchor":"notification_url/3","id":"notification_url/3"},{"anchor":"notification_url/4","id":"notification_url/4"},{"anchor":"path/2","id":"path/2"},{"anchor":"prometheus_metrics_path/2","id":"prometheus_metrics_path/2"},{"anchor":"prometheus_metrics_path/3","id":"prometheus_metrics_path/3"},{"anchor":"prometheus_metrics_url/2","id":"prometheus_metrics_url/2"},{"anchor":"prometheus_metrics_url/3","id":"prometheus_metrics_url/3"},{"anchor":"static_integrity/2","id":"static_integrity/2"},{"anchor":"static_path/2","id":"static_path/2"},{"anchor":"static_url/2","id":"static_url/2"},{"anchor":"url/1","id":"url/1"}]}],"title":"MongoosePushWeb.Router.Helpers"},{"group":"","id":"MongoosePushWeb.Schemas","title":"MongoosePushWeb.Schemas"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"alert/0","id":"alert/0"},{"anchor":"base/0","id":"base/0"},{"anchor":"data/0","id":"data/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.AlertNotification","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.AlertNotification"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.Common.Alert","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.Common.Alert"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.Common.Data","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.Common.Data"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.MixedNotification","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.MixedNotification"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.SilentNotification","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.Deep.SilentNotification"},{"group":"","id":"MongoosePushWeb.Schemas.Request.SendNotification.FlatNotification","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Request.SendNotification.FlatNotification"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.GenericError","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.GenericError"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.Gone","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.Gone"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.PayloadTooLarge","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.PayloadTooLarge"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.ServiceUnavailable","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.ServiceUnavailable"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.TooManyRequests","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.TooManyRequests"},{"group":"","id":"MongoosePushWeb.Schemas.Response.SendNotification.UnknownError","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"schema/0","id":"schema/0"}]}],"title":"MongoosePushWeb.Schemas.Response.SendNotification.UnknownError"}],"tasks":[{"group":"","id":"Mix.Tasks.Certs.Dev","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"title":"mix certs.dev"},{"group":"","id":"Mix.Tasks.Compile.Asn1","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"title":"mix compile.asn1"},{"group":"","id":"Mix.Tasks.Test.Env.Down","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"title":"mix test.env.down"},{"group":"","id":"Mix.Tasks.Test.Env.Up","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"title":"mix test.env.up"},{"group":"","id":"Mix.Tasks.Test.Env.Utils","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"compose/2","id":"compose/2"},{"anchor":"flunk/1","id":"flunk/1"},{"anchor":"wait_for_services/1","id":"wait_for_services/1"}]}],"title":"mix test.env.utils"},{"group":"","id":"Mix.Tasks.Test.Env.Wait","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"title":"mix test.env.wait"}]}