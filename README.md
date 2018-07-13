# node-react-server-client-auth
working project that demonstrates server-side and client-side auth using node.js, react-redux, passport, mongoDB and jwt and 
Bcrypt.


# Setting up

##MongoDB
For this project to run you will need the current version of MongoDB installed and running on your computer. Once you have your 
endpoint for the DB you can go to server/index.js and change the location of your DB to your running instance on line 12

##Server (Node)
Navigate to server directory and issue the command **npm run dev** to spin up the backend server which is set to run on
localhost:3090. This will also start up nodemon which will enable live reloading of the server if you happen to make changes to
while it is running.

##Client (React)
Once you have cloned this repo, you can navigate to the client directory and use **npm start** to spin up the react server
on localhost:3000.


