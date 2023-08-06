# Flight Service

## Project Setup

- clone project on your local machine
- create a `.env` in the src subfolder and and add the following environment variables
    - PORT = 300
- inside `src/config` create a config.json and add the following piece of code
```
    {
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "FlightSearchDbDev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- once you're finished with the db config open src foolder in terminal and execute `npx sequelize db:create`

