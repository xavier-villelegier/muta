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

Or this command to allow access your Rails server from a different machine

```
cd server && bin/rails server -b 0.0.0.0
```

On `http://127.0.0.1:3000` you should see the rails home page, this means your backend server is running correctly

## Deamon to communicate with skin and robotic arm

- Go in the `server` directory

  ```
  cd server
  ```

- Start the deamon

  ```
  bin/rails runner lib/deamon.rb -b 0.0.0.0
  ```

- Try to send a message to see it in the deamon

  ```
  rails c # Start a rails console

  s = UDPSocket.new # create a new udp socket
  s.send("hello", 0, 'localhost', 3001) # Send the message, yo should see it in the deamon
  ```

### TODO:

[X] dissocier le provider du message ('device'/'phone')
[ ] parser ce qui est reçu de la skin
[ ] ajouter la notion de temporalité avec les 'timestamps' pour dessiner une réponse
[ ] faire le UI dans l'app
[ ] transmettre au bras le dessin du téléphone

---

```
Message.create!(content: [{"x"=>54.666656494140625,
    "y"=>84.33333969116211},
   {"x"=>54.666656494140625,
    "y"=>84.33333969116211},
   {"x"=>54.666656494140625,
    "y"=>84.33333969116211},
   {"x"=>54.666656494140625,
    "y"=>120.0000114440918},
   {"x"=>54.666656494140625,
    "y"=>156.3333396911621},
   {"x"=>54.666656494140625,
    "y"=>175.0000114440918},
   {"x"=>54.666656494140625,
    "y"=>179.66666793823242},
   {"x"=>54.666656494140625,
    "y"=>181.0000114440918},
   {"x"=>54.666656494140625,
    "y"=>180.66666793823242},
   {"x"=>54.666656494140625,
    "y"=>178.66666793823242},
   {"x"=>54.666656494140625,
    "y"=>173.66666793823242},
   {"x"=>57.666656494140625,
    "y"=>158.66666793823242},
   {"x"=>67, "y"=>140.3333396911621},
   {"x"=>75, "y"=>125.0000114440918},
   {"x"=>85.66665649414062,
    "y"=>107.66666793823242},
   {"x"=>96, "y"=>92.0000114440918},
   {"x"=>102, "y"=>82.33333969116211},
   {"x"=>108, "y"=>73.33333969116211},
   {"x"=>113.33332824707031,
    "y"=>65.66666793823242},
   {"x"=>119.66665649414062,
    "y"=>59.0000114440918},
   {"x"=>126.66665649414062,
    "y"=>51.66666793823242},
   {"x"=>131.66665649414062,
    "y"=>45.66666793823242},
   {"x"=>136, "y"=>40.66666793823242},
   {"x"=>138.66665649414062,
    "y"=>38.0000114440918},
   {"x"=>140.3333282470703,
    "y"=>36.66666793823242},
   {"x"=>141.3333282470703,
    "y"=>36.33333969116211},
   {"x"=>141.66665649414062,
    "y"=>36.33333969116211},
   {"x"=>142.3333282470703,
    "y"=>39.0000114440918},
   {"x"=>144, "y"=>48.0000114440918},
   {"x"=>155.3333282470703,
    "y"=>82.0000114440918},
   {"x"=>168.3333282470703,
    "y"=>115.0000114440918},
   {"x"=>179.66665649414062,
    "y"=>142.66666793823242},
   {"x"=>186, "y"=>158.0000114440918},
   {"x"=>192.66665649414062,
    "y"=>172.0000114440918},
   {"x"=>195.66665649414062,
    "y"=>177.3333396911621},
   {"x"=>196.66665649414062,
    "y"=>178.3333396911621},
   {"x"=>197.3333282470703,
    "y"=>178.66666793823242},
   {"x"=>197.3333282470703,
    "y"=>177.66666793823242},
   {"x"=>197.66665649414062,
    "y"=>173.66666793823242},
   {"x"=>200.3333282470703,
    "y"=>158.3333396911621},
   {"x"=>207, "y"=>138.0000114440918},
   {"x"=>222, "y"=>93.66666793823242},
   {"x"=>233.3333282470703,
    "y"=>61.66666793823242},
   {"x"=>244.66665649414062,
    "y"=>25.000011444091797},
   {"x"=>251, "y"=>5.333339691162109},
   {"x"=>253, "y"=>-0.6666603088378906},
   {"x"=>254, "y"=>-2.6666603088378906},
   {"x"=>254.66665649414062,
    "y"=>-2.999988555908203},
   {"x"=>255.3333282470703,
    "y"=>-2.999988555908203},
   {"x"=>255.66665649414062,
    "y"=>-1.6666603088378906},
   {"x"=>257.3333282470703,
    "y"=>4.000011444091797},
   {"x"=>266.3333282470703,
    "y"=>26.000011444091797},
   {"x"=>278, "y"=>51.33333969116211},
   {"x"=>290.6666564941406,
    "y"=>77.33333969116211},
   {"x"=>299.6666564941406,
    "y"=>95.0000114440918},
   {"x"=>306, "y"=>107.33333969116211},
   {"x"=>310.3333282470703,
    "y"=>115.33333969116211},
   {"x"=>312.6666564941406,
    "y"=>119.33333969116211},
   {"x"=>313.6666564941406,
    "y"=>120.66666793823242},
   {"x"=>314, "y"=>121.33333969116211},
   {"x"=>314.3333282470703,
    "y"=>121.33333969116211},
   {"x"=>314.3333282470703,
    "y"=>117.66666793823242},
   {"x"=>315, "y"=>107.33333969116211}])
```

# Figma

https://www.figma.com/file/xgDfaALY9r4yEYU0SL7lax/Hackathon-TOM-2023?type=design&node-id=52%3A87&mode=design&t=g4oWvTzpTCX81WFC-1
