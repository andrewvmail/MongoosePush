sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"},{"id":"Mix Tasks","anchor":"mix-tasks"}]},{"id":"readme","title":"MongoosePush","group":"","headers":[{"id":"Quick start","anchor":"quick-start"},{"id":"Configuration","anchor":"configuration"},{"id":"RESTful API","anchor":"restful-api"},{"id":"Metrics","anchor":"metrics"}]}],"exceptions":[],"modules":[{"id":"MongoosePush","title":"MongoosePush","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"alert/0","anchor":"t:alert/0"},{"id":"alert_key/0","anchor":"t:alert_key/0"},{"id":"data/0","anchor":"t:data/0"},{"id":"data_key/0","anchor":"t:data_key/0"},{"id":"error/0","anchor":"t:error/0"},{"id":"mode/0","anchor":"t:mode/0"},{"id":"req_key/0","anchor":"t:req_key/0"},{"id":"request/0","anchor":"t:request/0"},{"id":"service/0","anchor":"t:service/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"push/2","anchor":"push/2"}]}]},{"id":"MongoosePush.API","title":"MongoosePush.API","group":"","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"id":"to_status/1","anchor":"c:to_status/1"}]}]},{"id":"MongoosePush.API.V1.ResponseEncoder","title":"MongoosePush.API.V1.ResponseEncoder","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"to_status/1","anchor":"to_status/1"}]}]},{"id":"MongoosePush.API.V2.ResponseEncoder","title":"MongoosePush.API.V2.ResponseEncoder","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"to_status/1","anchor":"to_status/1"}]}]},{"id":"MongoosePush.API.V3.ResponseEncoder","title":"MongoosePush.API.V3.ResponseEncoder","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"to_status/1","anchor":"to_status/1"}]}]},{"id":"MongoosePush.Metrics","title":"MongoosePush.Metrics","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"name/3","anchor":"name/3"},{"id":"update/4","anchor":"update/4"},{"id":"update_metric/3","anchor":"update_metric/3"}]}]},{"id":"MongoosePush.Service","title":"MongoosePush.Service","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"error/0","anchor":"t:error/0"},{"id":"error_reason/0","anchor":"t:error_reason/0"},{"id":"error_type/0","anchor":"t:error_type/0"},{"id":"notification/0","anchor":"t:notification/0"},{"id":"options/0","anchor":"t:options/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"choose_pool/1","anchor":"c:choose_pool/1"},{"id":"prepare_notification/3","anchor":"c:prepare_notification/3"},{"id":"push/4","anchor":"c:push/4"},{"id":"supervisor_entry/1","anchor":"c:supervisor_entry/1"}]}]},{"id":"MongoosePush.Service.APNS","title":"MongoosePush.Service.APNS","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"choose_pool/2","anchor":"choose_pool/2"},{"id":"prepare_notification/3","anchor":"prepare_notification/3"},{"id":"push/4","anchor":"push/4"},{"id":"supervisor_entry/1","anchor":"supervisor_entry/1"},{"id":"unify_error/1","anchor":"unify_error/1"}]}]},{"id":"MongoosePush.Service.APNS.ErrorHandler","title":"MongoosePush.Service.APNS.ErrorHandler","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"translate_error_reason/1","anchor":"translate_error_reason/1"}]}]},{"id":"MongoosePush.Service.APNS.State","title":"MongoosePush.Service.APNS.State","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"get_default_topic/1","anchor":"get_default_topic/1"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"MongoosePush.Service.APNS.Supervisor","title":"MongoosePush.Service.APNS.Supervisor","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"MongoosePush.Service.FCM","title":"MongoosePush.Service.FCM","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"choose_pool/2","anchor":"choose_pool/2"},{"id":"prepare_notification/3","anchor":"prepare_notification/3"},{"id":"push/4","anchor":"push/4"},{"id":"supervisor_entry/1","anchor":"supervisor_entry/1"},{"id":"unify_error/1","anchor":"unify_error/1"}]}]},{"id":"MongoosePush.Service.FCM.ErrorHandler","title":"MongoosePush.Service.FCM.ErrorHandler","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"translate_error_reason/1","anchor":"translate_error_reason/1"}]}]},{"id":"MongoosePush.Service.FCM.Pool.Supervisor","title":"MongoosePush.Service.FCM.Pool.Supervisor","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"MongoosePush.Service.FCM.Pools","title":"MongoosePush.Service.FCM.Pools","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"pool_size/2","anchor":"pool_size/2"},{"id":"pools_by_mode/0","anchor":"pools_by_mode/0"},{"id":"select_worker/0","anchor":"select_worker/0"},{"id":"worker_name/3","anchor":"worker_name/3"}]}]}],"tasks":[{"id":"Mix.Tasks.Certs.Dev","title":"mix certs.dev","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/1","anchor":"run/1"}]}]},{"id":"Mix.Tasks.Compile.Asn1","title":"mix compile.asn1","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/1","anchor":"run/1"}]}]}]}