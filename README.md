<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="https://www.sensinum.com/img/open-source/strapi-plugin-open-mercato/logo.png" alt="Logo - Strapi Plugin Open Mercato" />
</div>
<div align="center">
  <h1>Strapi Open Mercato Plugin</h1>
  <p>Seamless Open Mercato integration for your Strapi instance</p>
  <a href="https://www.npmjs.org/package/@sensinum/strapi-plugin-open-mercato">
    <img alt="NPM version" src="https://img.shields.io/npm/v/@sensinum/strapi-plugin-open-mercato.svg">
  </a>
  <a href="https://www.npmjs.org/package/@sensinum/strapi-plugin-open-mercato">
    <img src="https://img.shields.io/npm/dm/@sensinum/strapi-plugin-open-mercato.svg" alt="Monthly download on NPM" />
  </a>
  <a href="https://github.com/Sensinum/strapi-plugin-open-mercato/actions/workflows/ci.yml">
    <img src="https://github.com/Sensinum/strapi-plugin-open-mercato/actions/workflows/ci.yml/badge.svg" alt="CI" />
  </a>
  <a href="https://codecov.io/gh/Sensinum/strapi-plugin-open-mercato">
    <img alt="codecov" src="https://img.shields.io/codecov/c/github/Sensinum/strapi-plugin-open-mercato/main?logo=codecov">
  </a>
</div>

---

A Strapi plugin that connects your Strapi application with [Open Mercato](https://docs.openmercato.com) through a user-friendly interface. It features a custom product field and efficient product synchronization via the Open Mercato REST API (`/catalog/products`). The plugin comes with configurable caching mechanisms to optimize performance.

## 📋 Table of Contents

- [✨ Features](#features)
- [📋 Requirements](#requirements)
- [📦 Installation](#installation)
- [🔧 Plugin Configuration](#plugin-configuration)
- [👨‍💻 Development & Testing](#development--testing)
- [🔗 Links](#links)
- [💬 Community Support](#community-support)
- [📄 License](#license)

## ✨ Features

- Attach Open Mercato products to Strapi Content Types using a dedicated custom field
- Automatic product data synchronization via REST API
- Built-in caching (in-memory or Redis)

## 📋 Requirements

- Strapi v5.7.0 or later
- Node.js 22+
- An Open Mercato instance with REST API access
- For Redis cache: a running Redis instance

## 📦 Installation

```bash
npm install @sensinum/strapi-plugin-open-mercato@latest
# or
yarn add @sensinum/strapi-plugin-open-mercato@latest
```

Then, rebuild your Strapi admin panel:

```bash
npm run build
# or
yarn build
```

## 🔧 Plugin Configuration

### Required Configuration

Configure the plugin in your Strapi project's `./config/plugins.js` (or `.ts`):

- `encryptionKey` (string, **required**): A 32-character string used for encrypting sensitive data stored in Strapi
- `apiUrl` (string, **optional**): Your Open Mercato instance URL (e.g. `https://my-instance.openmercato.com`)
- `accessToken` (string, **optional**): Your Open Mercato API access token
- `engine` (string, **optional**, default not set): Cache engine — `'memory'` or `'redis'`
- `connection` (object, **required if `engine` is `'redis'`**): Redis connection details:
  - `host` (string)
  - `port` (number)
  - `db` (number)
  - `password` (string, optional)
  - `username` (string, optional)

### Example Configurations

**Using Memory Engine:**

```javascript
// ./config/plugins.js
module.exports = ({ env }) => ({
  'open-mercato': {
    enabled: true,
    config: {
      encryptionKey: env('OPEN_MERCATO_ENCRYPTION_KEY'),
      apiUrl: env('OPEN_MERCATO_API_URL'),
      accessToken: env('OPEN_MERCATO_ACCESS_TOKEN'),
      engine: 'memory',
    },
  },
});
```

**Using Redis Engine:**

```javascript
// ./config/plugins.js
module.exports = ({ env }) => ({
  'open-mercato': {
    enabled: true,
    config: {
      encryptionKey: env('OPEN_MERCATO_ENCRYPTION_KEY'),
      apiUrl: env('OPEN_MERCATO_API_URL'),
      accessToken: env('OPEN_MERCATO_ACCESS_TOKEN'),
      engine: 'redis',
      connection: {
        host: env('REDIS_HOST', '127.0.0.1'),
        port: env.int('REDIS_PORT', 6379),
        db: env.int('REDIS_DB', 0),
        password: env('REDIS_PASSWORD', undefined),
        username: env('REDIS_USERNAME', undefined),
      },
    },
  },
});
```

Remember to add the corresponding environment variables to your `.env` file.

## 👨‍💻 Development & Testing

- Build: `yarn build`
- Test backend: `yarn test:server`
- Test frontend: `yarn test:ts:front`

## 🔗 Links

- [Open Mercato Documentation](https://docs.openmercato.com)
- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)

## 💬 Community Support

- [GitHub](https://github.com/Sensinum/strapi-plugin-open-mercato) (Bug reports, contributions)
- [Discord](https://discord.strapi.io) (For live discussion with the Community and Strapi team)
- [Community Forum](https://forum.strapi.io) (Questions and Discussions)

## 📄 License

[MIT License](LICENSE) Copyright (c) [Sensinum Sp. z o.o.](https://www.sensinum.com/).
