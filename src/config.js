const development = {
  url: 'http://localhost:3000/api/v1/device',
};

const production = {
  url: `https://us-central1-light-api.cloudfunctions.net/light/api/v1/device`,
};

const config =
  process.env.REACT_APP_STAGE !== 'production' ? production : development;

export default { ...config };
