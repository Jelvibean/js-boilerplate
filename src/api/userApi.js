import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
