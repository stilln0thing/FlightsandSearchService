# Welcome to Flights Service

# Project Setup
- clone the project on your local device
-Execute `npm install` on the same path.
- Create a `.env` file in the root directory and add the following environment variable
   - `PORT = 3000`
- Inside the `src/config` folder create a new file named `config.json` and then add the following piece of code

```
{
"development": {
    "username": <YOUR USERNAME>,
    "password": <YOUR PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

-Once you have added your db config as listed above, you need to go to src folder from temrinal and execute `npm sequelize db:create` 
