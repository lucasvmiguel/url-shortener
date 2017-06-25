# url-shortener - server

This application is the server of url-shortener

## Installation
```bash
npm install
```

## Quick Start
You must run mongo to start (if you configurated to run with mongo)
```bash
npm start
```

## Configuration

Change this config in [CONFIG](config.json)
```json
  {
    "http": {               
      "host": "http://localhost:5000" // http server host 
    },
    "repository": {
      "type": "local", // you can run local(to cache in memory) or mongo(to persist)
      
      "mongo": {
        "connString": "mongodb://localhost/url-shortener" // connection string of mongo (if you configurated to run with mongo)
      }
    },
    "urlApi": "http://gymia-shorty.herokuapp.com", // url api of shortener
    "scheduleTime": 10000 // polling time to server GET url stats (milliseconds)
  }
```

## Patterns and Technologies
* [Nodejs](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Mongo](https://www.mongodb.com/)
* [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)
* [Babel](https://babeljs.io/)
* [Ramda - Functional](http://ramdajs.com/)

## API Documentation

### GET /shorten

```
GET /shorten
```

##### Returns

```
200 OK
Content-Type: "application/json"

[
  {
    "urlExtended":"http://globo.com",
    "urlShorten":"http://localhost:5000/shorten/8ad718",
    "shortcode":"8ad718",
    "startDate":"1498430484000",
    "lastSeenDate":"1498430495000",
    "redirectCount":1
  }
]
```

Attribute     | Description
------------- | -----------
list of urls  | list of urls 

##### Errors

Error | Description
----- | ------------
500   | internal server error

### POST /shorten

```
POST /shorten
Content-Type: "application/json"

{
  "urlExtended": "http://example.com",
  "shortcode": "example"
}
```

Attribute   | Description
---------   | -----------
urlExtended | url to shorten
shortcode   | preferential shortcode

##### Returns:

```
201 Created
```

##### Errors:

Error | Description
----- | ------------
400   | invalid body params
500   | internal server error

### GET /shorten/:shortcode

```
GET /shorten/:shortcode
```

Attribute  | Description
---------- | -----------
shortcode  | url encoded shortcode

##### Returns

```
HTTP/1.1 302 Found
Location: http://www.example.com
```

##### Errors

Error | Description
----- | ------------
404   | The shortcode cannot be found in the system
500   | internal server error

### DELETE /shorten

Delete all urls

```
DELETE /shorten
```

##### Returns

```
200 OK
```

##### Errors

Error | Description
----- | ------------
500   | internal server error


## Tests and Lint
```bash
npm lint
npm test
```

## Requirements
* Nodejs
* Mongo (if you configurated to run with mongo)