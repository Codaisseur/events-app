# Events app

This is an example app made to be used by Codaisseur students. This app shows a simple setup using React an Redux, creating, reading, updating and deleting via a REST API. 

## Running locally

Put some events data in `db.json` and run the JSON-server:

```bash
$ npm install -g json-server
$ json-server --delay 1000 --port 4000 db.json
```

Now run the React-app as usual:

```bash
$ yarn start
```

