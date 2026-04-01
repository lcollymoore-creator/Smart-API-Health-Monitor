import { test, expect } from '@playwright/test';
import { services } from '../config/services.json';
import { sendRequest } from './httpClient.ts';

test('Executing API health checks', async () => {
  for (const service of services) {
    const response = await sendRequest({
      baseURL: service.url,
      endpoint: service.endpoint,
      method: service.method,
      serviceName: service.name,
    });

    await test.info().attach(`Api Services - ${service.name}`, {
      body: JSON.stringify(response, null, 2),
      contentType: 'application/json',
    });
    console.log(`Service: ${service.name}, Status: ${response.status}`);
    expect(response.status).toBe(service.expectedStatus);

  }
});