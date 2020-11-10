import request from 'request';
export const sendRequest = async (method: string, url: string, data: any = {}): Promise<any> => {
    const options = {
      method,
      url,
      headers:
        {
          'content-type': 'application/json',
        },
      body: data,
      json: true,
    };

    return new Promise((resolve, reject) => {
      request(options, (error: any, response: any, body: any) => {
        if (error) return reject(error);

        return resolve(body);
      });
    });
  }