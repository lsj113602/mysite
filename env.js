require('dotenv').config();

const devConfig = {
  API_URL: JSON.stringify(process.env.API_URL_DEV)
};

const prodConfig = {
  API_URL: JSON.stringify(process.env.API_URL_PROD)
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    default:
      return prodConfig;
  }
}

module.exports = Object.assign({}, envConfig(process.env.NODE_ENV));
