# myblog

> A simple blog with NodeJs, VueJs, Auth0, Mongoose, Express

## Build Setup

``` bash
# install dependencies
npm install

obtain client_id and domain from auth0
[a link](https://auth0.com)

setup the client_id and domain in src/utils/config.js 

obtain mongodbURI and secret key from mlab
[a link](https://mlab.com)

setup the mongoURI and SecretKey in /server/config/keys.js

Add allowed callback URL to your auth0 app

Add environment variable NOW_TOKEN to your travis account

# build for production with minification
npm run build

# start node server
npm run server
