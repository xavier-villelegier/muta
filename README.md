# Contributing

## Setup

### 1) Create the docker container with the database

```
docker-compose up -d
```

### 2) Create the database schema

```
cd server && bin/rails db:migrate
```

Troubleshooting:

If you get this error: `function uuid_generate_v4() does not exist`, run this command in Postico or postgres:

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Run the mobile app

### 1) Start the expo dev server

At the root of the repo, run the following commands

```
npm i
npm start
```

You should be able to start an iOS and Android simulator from the menu and see the app

### 2) Start the rails server

```
cd server && bin/rails server
```

On `http://127.0.0.1:3000` you should see the rails home page, this means your backend server is running correctly

### TODO:

[X] discossier le provider du message ('skin'/'phone')
[ ] parser ce qui est reçu de la skin
[ ] ajouter la notion de temporalité avec les 'timestamps' pour dessiner une réponse
[ ] faire le UI dans l'app
[ ] transmettre au bras le dessin du téléphone