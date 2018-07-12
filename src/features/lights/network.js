import config from '../../config';
export const url = config.url;

export function loadLightDataFromServer() {
  return fetch(url).then(response => response.json());
}

export function sendLighDataToServer(row) {
  return fetch(`${url}/${row.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        name: row.name,
        active: row.active,
        brightness: row.brightness,
      },
    }),
  }).then(response => response.json());
}
