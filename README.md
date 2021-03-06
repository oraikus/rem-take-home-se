# How To Run The App

Don't try to run this without using Docker containers. I definitely didn't.

# Development

## Dependencies

- Docker
    - You can find your OS-specific installation instructions regarding Docker Desktop here: https://docs.docker.com/get-docker/

## Run with Docker Compose: server + client + database

```bash
$ docker-compose up [--build]
```

The --build flag will build images before starting containers. Use if needed at your own discretion.

## Stop all containers with Docker Compose

```bash
$ docker-compose down
```

### Notes Regarding Docker Compose

You may need to use sudo on the `docker-compose up` / `docker-compose down` calls depending on your configuration.
Personally, I had to do this using WSL2 and Ubuntu on a Windows 10 host OS.

## Where Are Various Parts Running
The server, react client, and postgres database are all running in their own Docker containers and contained in a Docker Network.

You can access the exposed ports from the docker containers as follows: the backend node server will be running on localhost:8080 and the react client will be running on localhost:3000


## Run tests

Tests are run during the `docker-compose up` command.

## Challenges I Faced, Mistakes I Made, And What I Can Do Better

### Trying To Use a Framework I Haven't Used In 5 Years

I initially decided to try to use Django with the given React template in the take-home.
This was a big mistake for a few reasons:
- I hadn't set up my new PC for local development with Django and Docker.
    - While I easily pulled down my old vimrc and VSCode settings, it still took time to properly set up WSL2 and Docker.
- I attempted to run through the README instructions _without_ Docker and adapt commands on the fly for Windows (they assume MacOS or Linux)
    - This wasted a couple hours to get everything up and running. At that point I realized I was making horrible assumptions regarding the OS/environment you would try to run the submission on and realized I had to use Docker for my own sanity.

After that I figured I'd use what time I had left to write something quick and dirty in node. This led to not completing the majority of the take-home assignment, but hopefully gives enough of what I was going for in regard to the front-end, projected testing, and how I had the backend database relationships set up.

### Using Unfamiliar Libraries

As for new things I tried using for fun:
- Sequelize
    - I hadn't used an ORM for Postgres and node until this project, having written everything using `pg` and writing queries directly.
- pm2 --> a process manager for node.js that I found on a blog

## What I'd Recommend to Anyone Else

- If you're going to timebox something, use a tech stack you're more familiar with instead of trying to relearn one you knew years ago. 
- Make absolutely sure your dev environment is set up on your new computer. It isn't fun scrambling to get everything reconfigured.

## Miscellaneous

I normally do an interactive rebase and squash or fixup my commits, but given the time crunch I was under I didn't do so in this project.

## To Whoever Reads This At Remesh

I _really_ enjoyed working on this take home, and thanks for the opportunity. I know this is a far cry from a feature complete take home submission, but by the time I decided to rewrite my Django submission with Node I had been up for 18 hours. I'm looking forward to all the constructive feedback I'm going to receive and I'm sorry in advance for the TODO's I never got to. 
