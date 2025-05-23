****﻿# BookReviewAPI****

# Required tools & technologies
  1. Node.js
  2. npm
  3. github
  4. MongoDB Atlas
  5. VS Code IDE
  6. Postman API Testing

# Project Setup instructions - 
  1. new folder creation
  2. install node modules - npm init -y
  3. install required packages - (express, mongoose, mongodb, jsonwebtoken, nodemon, bcryptjs, dotenv).
  4. MongoDB cluster creation and URI generation (authentication.js)
  5. backend connection with MongoDB (server.js)
  6. login & signup logics and routes creation and endpoint testing.
  7. DB Schema model setup for books, reviews & users. (models directory)
  8. controls setup for books, users & reviews. (controls directory)
  9. routes setup for books, users & reviews. (routes directory)
  10. API endpoints testing using Postman (allAPIS.txt)

![image](https://github.com/user-attachments/assets/18a436e1-3497-45bf-a7e5-c54ee218ae8e)


**# To run locally**
  1. Clone github repo in your IDE
  2. Install Node.js, if not installed
  3. Create a MongoDB Atlas cluster and replace MONGO_URI present in .env file
  4. Generate JWT Key and replace with JWT_SECURITY_KEY present in .env file
  5. Test API endpoints present in allAPIs.txt using Postman app

**# API requests -**
1. Signup ![image](https://github.com/user-attachments/assets/eda326e6-d7e1-4735-b5a0-445cdb9fcf3a)
2. addBook ![image](https://github.com/user-attachments/assets/1eaf9940-b455-4637-ab29-1466c911b109)
3. getBookById ![image](https://github.com/user-attachments/assets/26332340-29a2-480f-8a4a-2ad6f18459f4)
4. search ![image](https://github.com/user-attachments/assets/1fed3bc9-2046-403e-b029-ac160cddc51a)

**Design Selection**
 firstly , I thougth to create localhost DB using XAMPP server but it requires extensive query writing and handling and if i have to deploy my backend on the internet then i have to make lot of changes,
 so i tried it create DB schema to store data in JSON format using MongoDB Atlas.

 **DATABASE Schema :**
 ![image](https://github.com/user-attachments/assets/1510f7cd-6ec2-4e5e-99e0-5ac643b9144d)
