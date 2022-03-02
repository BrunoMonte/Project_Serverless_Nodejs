import { APIGatewayEvent } from "aws-lambda";

export const  hello = async (event: APIGatewayEvent) => ({
   statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Mensagem com sucesso !!',
        queryString: event.queryStringParameters,
      },
      null,
      2
    ),
})
   
