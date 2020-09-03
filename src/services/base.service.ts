import {buildUrl, handleResponse} from 'utils/services';
import {AnyObject} from 'models/common/AnyObject';

const CONTENT_TYPE = 'content-type';
const CONTENT_TYPE_VALUE = 'application/json';

const getBaseRequestOptions = (): RequestInit => {
  const headers = new Headers();
  headers.append(CONTENT_TYPE, CONTENT_TYPE_VALUE);
  return {
    headers,
    credentials: 'include',
    redirect: 'manual'
  };
};

export function baseGet<T>(url: string, params?: AnyObject): Promise<T> {
  const requestOptions = {
    ...getBaseRequestOptions(),
    method: 'GET'
  };
  return fetch(buildUrl(url, params), requestOptions).then(res => handleResponse<T>(res));
}

export function baseGetById<T>(url: string, id: number): Promise<T> {
  const requestOptions = {
    method: 'GET',
    ...getBaseRequestOptions()
  };
  return fetch(`${url}/${id}`, requestOptions).then(res => handleResponse<T>(res));
}

export function basePost<T>(url: string, item: AnyObject): Promise<T> {
  const requestOptions = {
    ...getBaseRequestOptions(),
    contentType: CONTENT_TYPE_VALUE,
    method: 'POST',
    body: JSON.stringify(item)
  };
  return fetch(url, requestOptions).then(res => handleResponse<T>(res));
}

export function basePut<T>(url: string, item: AnyObject): Promise<T> {
  const requestOptions = {
    ...getBaseRequestOptions(),
    contentType: CONTENT_TYPE_VALUE,
    method: 'PUT',
    body: JSON.stringify(item)
  };
  return fetch(url, requestOptions).then(res => handleResponse<T>(res));
}

export function baseDelete<T>(url: string): Promise<T> {
  const requestOptions = {
    ...getBaseRequestOptions(),
    method: 'DELETE'
  };
  return fetch(url, requestOptions).then(res => handleResponse<T>(res));
}
