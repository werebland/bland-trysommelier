const dotEnvResult = require('dotenv').config()

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    FIREBASE_API: process.env.FIREBASE_API,
  }
}
