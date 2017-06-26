# url-shortener - client

This application is the client of url-shortener api

## Installation
```bash
npm install
```

## Quick Start
```bash
npm start
```

## Configuration

Change this config in [CONFIG](config.json)
```json
  {
    "apiUrl": "http://localhost:5000", // url of url-shortener server
    "appUrl": "localhost:3000",        // url of url-shortener client (this not change the port running)
    "scheduleTime": 60000              // polling time to server GET - getting all urls (milliseconds)
  }
```

## Tests and Lint
```bash
npm test
```

## Patterns and Technologies
* [Nodejs](https://nodejs.org/en/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Container Architecture](https://medium.com/mofed/react-redux-architecture-overview-7b3e52004b6e)
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Ramda - Functional](http://ramdajs.com/)
* [Service Workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers?hl=pt-br)
* [Create React App](https://github.com/facebookincubator/create-react-app)

## Requirements
* Nodejs
* url-shortener server running