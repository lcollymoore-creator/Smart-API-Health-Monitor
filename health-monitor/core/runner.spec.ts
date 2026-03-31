import { test, expect } from '@playwright/test';
import { services } from '../config/services.json';
import { sendRequest } from './httpClient.ts';

test('validar servicios desde JSON', async () => {
  for (const service of services) {
    const response = await sendRequest({
      baseURL: service.url,
      endpoint: service.endpoint,
      method: service.method,
    });

 
    expect(response.status).toBe(service.expectedStatus);

  }
});