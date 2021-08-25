# LAP-2-Code-Challenge

## by Jasmin and Cerise you are welcome to look :) 
=======
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

To run the HTML file, follow the below steps (in a new terminal, keeping the server open):

- `cd client` (if you are within another folder, navigate out of it)
- `open index.html`


