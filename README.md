# How To Run

Don't try to run this without using Docker containers. I definitely didn't.

## Run with Docker Compose: server + client + database

```bash
$ docker-compose up
```

You may need to use sudo on the `docker-compose up` / `docker-compose down` calls depending on your configuration.
Personally, I had to do this using WSL2 and Ubuntu on a Windows 10 host OS.

You can access the exposed ports from the docker containers as follows: the backend node server will be running on localhost:8080 and the react client will be running on localhost:3000


## Stop all containers with Docker Compose

```bash
$ docker-compose down
```

## Run tests

Tests are run during the `docker-compose up` command.