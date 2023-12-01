# This is the front end for the Die Der oder Das app

[backend can be found here](https://github.com/ilyaflaks/dieDerOderDasApi/)
This is the React front end part of the full stack app. To run the app

1. clone this repo to your machine
2. clone the backend repo to your machine
3. install Java and Eclipse if you don't have it yet
4. In Eclipe, go to the top of the screen where it says File -> Import -> Existing Maven Projects -> Browse to where you cloned the repo to -> Click Finish
5. In Eclipse, open **DieDerOderDasApplication.java**, right click on the code, select Run As -> 1 Java Application
   It should sayd "Application runing on port 5000" on the Eclipse console

6. In the command line, **cd** to the folder where you cloned this repo. Make sure the folder you are in is the one with the **package.json** file. Run the command **"npm install"**. Wait for the node modules to finish installing. Then run the command **"npm start"**

7. Go to [http://localhost:3000](http://localhost:3000) and start playing around with the app.

# Features

- The backend is created with Spring Boot 3.2.0, Java 17 and Maven
- The backend is using an in-memory H2 database. Hopefully, that will save me some $ by not having to pay for an RDS...

# DevOps

This project is temporarily deployed to AWS with the [front end on S3](http://diederoderdas.s3-website-us-west-1.amazonaws.com/) and the backend on EC2. If you click on the link and it's not working or if the backend is not responding, that means AWS started charging me more money than I'm willing to spend and I have deleted the app.

# Sources

MIT license This project is my idea although it is heavily influenced by the [Master Spring Boot 3 & Spring Framework 6 with Java](https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners) by **in28minutes**.
Many thanks to ChatGPT for generating a list of 50 beginner German words and converting the list into SQL queries
