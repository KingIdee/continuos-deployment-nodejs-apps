# Blog App

> A simple blog with Node.js, Vue.js, Auth0, Mongoose, Express.js

# Setup

- Create an account at [Auth0](https://auth0.com/signup) or login to your dashboard if you have an account already.
- Create a new single page application client [client](https://manage.auth0.com/#/clients) and obtain your `client_id` and `domain`. Add the details to the `src/utils/config.js` file.
- Obtain your MongodbURI and secret key from [mlab](https://mlab.com). Add them to the `/server/config/keys.js` file.
- Create a new [Now](now.sh) account and obtain your `NOW_TOKEN`.
- Create a new [Travis CI]() account and copy your `NOW_TOKEN` to your Travis CI project.
- Install your dependencies:

```bash
npm install
```

- Start the server:

```bash
npm run server
```
- Add a callback URL to your Auth0 client. If you are on localhost, this should be your callback URL - `localhost:5000/callback` else, just add the `callback` to your Now URL.

