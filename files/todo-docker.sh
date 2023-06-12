#!/bin/bash

# download docker-compose.yml from github
DOCKER_COMPOSE_FILE_URL="https://raw.githubusercontent.com/Shubchynskyi/TodoList/master/scripts/docker-compose-hub.yaml"

# using curl
curl -k -o docker-compose.yml $DOCKER_COMPOSE_FILE_URL

# launch docker-compose
docker-compose -p todoproject up