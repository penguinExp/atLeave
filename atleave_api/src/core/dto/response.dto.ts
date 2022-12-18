interface ResponseInterface {
  // Operation Status to be sent as API status
  statusCode: number;

  // Result data to be sent as a JSON object and it also can be null
  data: any | undefined;

  // Error message to be sent and can be null
  error: string | undefined;

  // Message to show in the frontend if needed
  message: Array<string>;
}

/**
 * DTO for Response for all the API calls
 */
export class ResponseDTO implements ResponseInterface {
  statusCode: number;
  message: string[];
  data: any | undefined;
  error: string | undefined;
}
