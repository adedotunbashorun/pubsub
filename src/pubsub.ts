import { sendRequest } from './external';
const subscribers: any = {};
export const pubSub = () => {

  const publish = async(topic: string, payload: any) => {
    if (!Array.isArray(subscribers[topic])) {
      return;
    }
    subscribers[topic].forEach(async (item: any) => {
      const resp = await sendRequest('POST', item.url, payload);
      return resp;
    });
  }

  const subscribe = (topic: string, payload: any) => {
    if (!Array.isArray(subscribers[topic])) {
      subscribers[topic] = [];
    }
    subscribers[topic].push(payload);
  }

  return {
    publish,
    subscribe,
  }
}