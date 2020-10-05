# Full Stack Starter
This project is to provide a quick way to spin up a full stack project.

## Development
This project uses Yarn Workspaces to manage dependencies. To install the application locally, run `yarn install` in the root folder of the project.

### Frontend
To start the frontend React application go in the `frontend` directory and use the `yarn start` command.

### Backend
To start the backend node application first go in the `frontend` directory and build the project by using the `yarn build` command. Then use the `yarn dev` command, which will serve the API and also enable hot-reloading.

You can also use `yarn build` and then `yarn start` to statically serve the application.

## Docker
To start the application (full stack) by using docker, run the following commands:

```
$ docker-compose build
$ docker-compose up -d
```
