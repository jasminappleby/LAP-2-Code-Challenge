# LAP-2-Code-Challenge

## How to run 

If you do not have postgreSQL installed on your machine, follow the steps here to install: [PostgreSQL Install](https://www.postgresql.org/download/)

- `brew services start postgresql` (For Homebrew Users)
- `/usr/local/opt/postgres/bin/createuser -s postgres`
- `psql -U postgres`
- `create database stories;`
- `\c stories` 

Open new node terminal whilst still running this one

- `cd server/api`
- `npm i`
- `npm start`

Go to the localhost:3000 on your chosen web browser 

