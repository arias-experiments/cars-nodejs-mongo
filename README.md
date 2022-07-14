# cars-nodejs-mongo
A simple NodeJS application with REST/CRUD to represent simple Car objects

1. Install Xcode
2. Install NodeJS
3. Install Visual Studio Code
4. Set up Git
5. Install homebrew
6. Install MongoDB
7. Run the mongodb service 


Application Steps

1. Create Repository
2. Clone it to computer
3. Initialize the Project using npm init
4. Edit package.json
5. Create the Model
6. Create the Route
7. Create the helper database.js
** See create database below
8. Create index.js
9. Run and test
10. Commit and push

Reclaim Deployment

1. Create Account
2. Create Environment: NodeJS + Mongo
3. Read Email and check Mongo Dashboard
4. ** Create Database using usrname/password received by email on the web interface
    ** Using the reclaim cloud MongoDB SSH connection, create a user for that database
    ** Use THAT user to access the recently created database  
This is the user/pass given in the email
mongo -u admin -p YSZinr14273 localhost/admin
use friends (the database we want to deal with)
Create the user:
db.createUser( { user: "friends_usr", pwd: "yoon", roles: [ {role: "readWrite", db: "friends"} ] })

Once finished coding, need to push, and to redeploy using the git deployment option

