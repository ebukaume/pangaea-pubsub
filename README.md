<h2 align="center">Pangaea PubSub</h2>

### Technologies

* Node.js
* Express.js
* Redis


### Endpoints
- POST /subscribe
- POST /publish

### How to Run Locally
_You need to have node, npm and redis (installed locally or remotely hosted) installed_

> Clone Repo
```
$ git clone git@github.com:ebukaume/pangaea-pubsub.git
$ cd pangaea-pubsub
```

> Rename ".env.sample" to ".env" and provide the require environment variables
```
$ mv .env.sample .env
```

> Install dependencies
```
$ npm install
```

> Run app
```
$ npm start
```

### How to use
1. To subscribe
> POST `http://127.0.0.1/api/v1/subscribe/:topic`
```
Request body
{
    "url": "http://127.0.0.1:4000/v1/webhook"
}
```
2. To publish
> POST `http://127.0.0.1/api/v1/publish/:topic`
```
Request body
{
  "service": "TRACKING",
  "data": {
    "orderId": "5dbfda1d787c7f100beebad5",
    "lon": -118.303630,
    "lat": 34.060660,
  }
}
```

### Documentation
GET `/api/v1/docs`
