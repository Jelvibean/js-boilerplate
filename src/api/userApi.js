/* This file is where we are centralize all our api calls. */

import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

export function getUsers() {
/* users is a term given in the url -  http://localhost:3000/*****users****** */
  return get('users');
}

function get(url) {
/* baseUrl ends up being or / or http://localhost:3001 */
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
