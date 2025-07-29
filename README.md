# The Money Tree 🚀

A fullstack GraphQL banking application built using React, Node & TypeScript.

🔥Any contribution activity including finding/report/fixing issues, and pull requests are Welcome!👋 <br/>
Now it is fully open source. Check the contribution guide [here](CONTRIBUTING.md).

## Running

### Prerequirement
- Node.js
- PostgreSQL 13
  - create database name "themoneytree"
- Git clone
```bash
git clone https://github.com/Makena-WB/Bank-Dashboard.git
cd Bank-Dashboard
```

### Run backend
```bash
cd server
npm install
npm start
```
- check ormconfig.json file to check or update database connection info.

### Run frontend
```bash
cd client
npm install
npm start
```
- It will server at http://localhost:3000/
![dashboard](images/first.png)

### Using
- Register fist.
![dashboard](images/register.png)
- And then login.
![dashboard](images/blank.png)
- Add account and transaction! Play it!
![dashboard](images/dashboard.png)

## Functions

- Login/register
- Dashboard
- Accounts
- Transactions
- Credit cards
- Settings
- Spending for this month chart
- Dummy data generator using faker

## Tech Stack

### Server side

 - The Money Tree Server
- bcryptjs
- cors
- Express
- GraphQL
- faker
- jsonwebtoken
- TypeGraphQL
- TypeORM
- TypeScript
- PostgreSQL

### Client side

 - The Money Tree React Hooks
- FontAwesome Icons
- Material UI
- Chart.js
- Formik
- Yup

## Todo

- [ ] Update the chart on the dashboard to show spending such that the y axis is the users account balance.
- [ ] Sort transactions by date & sort chart data by date.
- [ ] Fetch exchange rates from an API.
- [ ] Simulate Transactions
- [ ] Create cards for users
- [ ] Conversion of currencies
- [ ] User account management
