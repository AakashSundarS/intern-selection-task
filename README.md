# Custom Form Generation API

## Quick Start
+ Clone repository
```bash
git clone https://github.com/ArunMurugan78/intern-selection-task.git
```
+ Install dependencies
```bash
yarn 
```
+ The following env variables are available to configure the application. Add them to the `.env` file.
```
PORT=
MONGO_URI=
```

The default configuration tries to connect to the mongo instance running locally `(127.0.0.1:27017)`. The default PORT is `8000`.


## Routes
+ POST /form/new - Creates a new form. The post data should have the content type as `application/json` and the body data should be of the following form.
```json
{
    "fields": [ { "type": "RADIO" }, { "type": "CHECKBOX" }, { "type" : "TEXT" } ]
}
```

Field type should be one of RADIO, TEXT, CHECKBOX. The response is of the following form.

```json
{  
   "formId": "617a2ae30f9b0385ae9ef5c7"
}
```

This request can be made in cURL like the following
```bash
 curl -X POST -d '{"fields": [ {"type": "RADIO" }, {"type": "TEXT"} ]}' -H "Content-Type: application/json" http://localhost:8000/form/new
```
```json
{"formId":"617a2b4c0f9b0385ae9ef5cb"}
```

+ GET  /form/:id - The response data contains the form information.

```bash
 curl http://localhost:8000/form/617a2b4c0f9b0385ae9ef5cb
```

```json
{"_id":"617a2b4c0f9b0385ae9ef5cb","fields":[{"type":"RADIO","_id":"617a2b4c0f9b0385ae9ef5cc"},{"type":"TEXT","_id":"617a2b4c0f9b0385ae9ef5cd"}],"__v":0}
```