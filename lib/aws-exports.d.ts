export default awsmobile;
declare namespace awsmobile {
    const aws_project_region: string;
    const aws_cognito_identity_pool_id: string;
    const aws_cognito_region: string;
    const aws_user_pools_id: string;
    const aws_user_pools_web_client_id: string;
    const oauth: {};
    const aws_cloud_logic_custom: {
        name: string;
        endpoint: string;
        region: string;
    }[];
    const aws_appsync_graphqlEndpoint: string;
    const aws_appsync_region: string;
    const aws_appsync_authenticationType: string;
    const aws_appsync_apiKey: string;
    const aws_appsync_dangerously_connect_to_http_endpoint_for_testing: boolean;
}
