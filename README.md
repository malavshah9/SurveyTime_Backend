## Description

<!-- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. -->
This is backend service made with Node.js using the [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Installation

```bash
$ npm install
```

## Deployement & Documentations

- On Heroku - [Click here to open app](https://survey-time.herokuapp.com/)

- [Api Documentation with testing interface](https://survey-time.herokuapp.com/api/)

## Endpoints Defined


### Request

`GET /survey/`

curl -i -H 'Content-type: application/json' http://localhost:3000/survey/

### Response

{
registration:"4343"
}

### Description
Used to register for the survey. You will get the registration number.

___

### Request

`POST /survey/:registrationNumber`

curl -i -H 'Content-type: application/json' http://localhost:3000/survey/3453

- Body should contain following kind JSON.

{
   "questions":[{"question":"Are you student?"},{"question":"Do you code daily?"}]
}

### Response

true or false

### Description
Used to store the "questions" for the given survey number. Reponses true if successfully stored, false if wrong survey number or wrong post body.

___

### Request

`POST /survey/response/:registrationNumber`

curl -i -H 'Content-type: application/json' http://localhost:3000/survey/response/3453

- Body should contain following kind JSON.

{
   "responses":[true,false,true,true,true]
}

### Response

true or false

### Description
Used to store the "answers" for the given survey number. Reponses true if successfully stored, false if wrong survey number or wrong post body

___

### Request

`GET /survey/:registrationNumber`

curl -i -H 'Content-type: application/json' http://localhost:3000/survey/:registrationNumber

### Response

[
  {
    "trueCount": 1,
    "falseCount": 0,
    "question": "Are you student?"
  },
  {
    "trueCount": 0,
    "falseCount": 1,
    "question": "Do you code daily?"
  }
]

### Description
Used to get the result of the survey for particular registration number.

___

### Request

`POST /survey/reset`

curl -i -H 'Content-type: application/json' http://localhost:3000/survey/reset

### Response

true or false

### Description
Used to reset the server and empty all the surveys.



## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Tools and Libraries Used

- Swagger for REST Api Documentation

- Winston Logger used which logs the server on two mediums 
  1. On Console Screen
  2. On file which exist on server

- Without database used
- Used validations for each and every POST method body.
- Rest Client used for testing purpose. You can also use in the main directory "test_example.http" file.
- Used DTOs(Data Transfer Objects) for scalable and error prone system.


<!-- ## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->

<!-- ## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support). -->

## Stay in touch

- Author - [Malav Shah](https://github.com/malavshah9)
<!-- - Website - [https://nestjs.com](https://nestjs.com/) -->
<!-- - Twitter - [@nestframework](https://twitter.com/nestframework) -->

<!-- ## License

  Nest is [MIT licensed](LICENSE). -->
