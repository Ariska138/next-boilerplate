import handler from '../../src/pages/api/hello';
import { createMocks } from 'node-mocks-http';

type Data = {
  name: string
}

describe('Sample API handler', () => {

  test('returns the correct response', async () => {
    console.log('env: ', process.env.NODE_ENV);

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        animal: 'dog',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        "name": "John Doe",
      }),
    );

  }, 12000);
});