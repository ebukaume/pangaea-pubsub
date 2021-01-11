curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:4000/webHook1"}' http://localhost:4000/v1/subscribe/topic1
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:4000/webHook2"}' http://localhost:4000/v1/subscribe/topic1
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:4000/v1/publish/topic1