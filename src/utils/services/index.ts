import {AnyObject} from 'models/common/AnyObject';
import get from 'lodash/get';
import {BaseServerArray, WithId} from '../../models/common/serverArray';

export function buildUrl(url: string, params?: AnyObject): string {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }
  const query = new URLSearchParams();
  Object.keys(params).forEach(key => {
    if (params[key] || params[key] === 0 || params[key] === false) {
      query.append(key, params[key].toString());
    }
  });
  const builtUrl = `${url}?${query}`;

  return builtUrl.startsWith('/') ? builtUrl : `/${builtUrl}`;
}

export function handleResponse<T>(response: Response): Promise<T> {
  return response.text().then(data => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = JSON.parse(data);
    if (get(json, 'errorDescription')) {
      throw Error(json.errorDescription);
    }
    return json;
  });
}

export const formatServerArray = <T>(serverArray: BaseServerArray<T>): WithId<T>[] =>
  Object.keys(serverArray).map(key => ({...serverArray[key], id: key}));
