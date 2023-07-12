# Contributing

MUTA was developed during a Hackathon organized by [TOM](https://tomglobal.org/) for TOM France from July 11th to 12th, 2023.

For the software part (this repository), 3 developers were involved:

1. Xavier Villelegier (staff architect at Doctolib)
2. Jade Vandal (software developer at Doctolib)
3. Nathan Mimoun (freelance developer)

With the help of 2 UI/UX designers who have made this awesome [Figma designs](https://www.figma.com/file/xgDfaALY9r4yEYU0SL7lax/Hackathon-TOM-2023?type=design&node-id=52%3A87&mode=design&t=g4oWvTzpTCX81WFC-1):

1. Gabrielle Rembusch
2. Vincent Barret

The entire code is open source and can be reused, continued, improved, to pursue the original's goal: provide a way for deaf blind people to communicate with other people. The original project idea is from Jean Bouissou.

The app was designed to communicate with 2 hardware parts, also designed during the hackathon by a team of hardware/meca/electronic team:

1. A skin device (input)
2. A robotic arm (output)

Potential next steps / Ideas to improve this project:

- Use the timestamps received by the skin device, to draw the input in "real time" on the mobile device, just like when it was drawn in the first place

# Setup

## 1) Create the docker container with the database

```
docker-compose up -d
```

## 2) Create the database schema

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

### Deamon to communicate with skin and robotic arm

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
