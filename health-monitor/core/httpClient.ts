import { request } from '@playwright/test';


export async function sendRequest({
  baseURL = '',
  endpoint = '',
  method = '',
  headers = {},
  data = null,
  serviceName = 'Unknown Service',
}) {
  const apiContext = await request.newContext({
    baseURL,
    extraHTTPHeaders: headers,
  });

  let response;

  switch (method.toUpperCase()) {
    case 'POST':
      response = await apiContext.post(endpoint, { data });
      break;
    case 'PUT':
      response = await apiContext.put(endpoint, { data });
      break;
    case 'DELETE':
      response = await apiContext.delete(endpoint);
      break;
    default:
      response = await apiContext.get(endpoint);
  }

  const responseBody = await response.json().catch(() => null);

  return {
    status: response.status(),
    headers: response.headers(),
    body: responseBody,
  };
}