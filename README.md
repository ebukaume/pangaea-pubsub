<h2 align="center">Pangaea PubSub</h2>

<p>
  For this challenge I created an HTTP notification system. A server (or set of servers) will keep track of `topics -> subscribers` where a topic is a string and a subscriber is an HTTP endpoint.  When a message is published on a topic, it is forwarded to all subscriber endpoints.

  I built this using Node.js, Express.js and Redis.
</p>

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

### Quick Demo
Start the server by running `npm start`, then run the demo script: `./demo.sh`

### Documentation
GET `/api/v1/docs`
