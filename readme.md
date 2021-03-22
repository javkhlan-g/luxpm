# LuxPM coding test

LuxPM coding test candidate Javkhlan Gansukh

## Task

1. Create a python script that generates the first 20 odd numbers from 0.
2. Save the 20 numbers into a json packet
3. Create a node script that calls the python script
4. Get the saved values in response
5. Save the result values into a mysql database. There should be 20 different rows in a table called result.
6. The mysql database should be named after your last name
7. Ensure that one can call this node script through Postman and provide us with a API definition.

### Prerequisites

```
 python 2.7
 node v12.16.2
 Express js framework
```

### Setup and Compile

1. Clone or Download this repository to your prefered directory

2. Create a new '.env' configuration file from .env.sample

```
  cp .env.sample .env
```

3. Set up your environment variables.

4. Install dependencies

```
npm i
```

5. Compile your application, run a following command

```
npm start
```

### Test

1. Browse to localhost:port

2. You can see the generated sample data from here /data/luxpm_db.sql

3. API documentation {localhost:port/api-docs}
