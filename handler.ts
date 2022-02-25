import { APIGatewayEvent } from "aws-lambda";

export const  hello = async (event: APIGatewayEvent) => ({
   statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        queryString: event.queryStringParameters,
      },
      null,
      2
    ),
})
   
