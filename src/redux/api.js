require('es6-promise').polyfill();
require('isomorphic-fetch');

function api(path, params) {
  const { method, body, headers } = params;
  const options = {
    method,
    headers,
  };
  if (body) options.body = body;
  let modifedPath;
  if (typeof window !== 'undefined' && window.serverPort) {
    const { hostname } = window.location;
    modifedPath = `http://${hostname}:${window.serverPort}${path}`;
  } else {
    modifedPath = `http://localhost:8080${path}`;
  }
  console.log('modifedPath', modifedPath);
  return fetch(modifedPath || path, options) // eslint-disable-line no-undef
    .then((response) => {
      if (response.status === 201 || response.status === 204 || response.status === 205) {
        return Promise.resolve();
      }
      return response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return Promise.resolve(json);
      });
    });
}

export default api;
