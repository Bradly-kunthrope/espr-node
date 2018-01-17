# React Fullstack (With Express, PostgreSQL, Sequelize, Sequelize-CLI, Gulp)

## initial commands

```
npm install -g create-react-app //install react starter kit globally on your computer
create-react-app <name-of-app> //create a react starter kit on your folder with the app name as folder name
npm install --save-dev nodemon //automatically restarts your server when changes were made
npm install --save sequelize sequelize-cli
sequelize init //initiate sequelize models, migrations, config for the project
```

## configuration (to be copy-pasted to config.json)
```
{
  "development": {
    "username": "postgres",
    "password": "root",
    "database": "db_development",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "root",
    "database": "db_test",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "root",
    "database": "db_production",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  }
}
```
## commands to add models and migrations to database*
```
sequelize db:create //will create the database specified in the config file
sequelize db:migrate //should migrate table to postgres database but is not working yet 
sequelize seed:create --name dummyData //create seed data 
sequelize db:seed:all //migrate seed data to PostgreSQL database
npm run dev //run server
```

****models and migration files have already been created. You may add more if you want to test/need to.***


https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#express-setup