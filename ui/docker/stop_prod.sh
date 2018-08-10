#!/bin/bash

if [ -f .env ];
then
    set -a
    source .env
    docker-compose -f docker-compose.prod.yml down
else
    echo "Please copy .env.sample to .env"
fi
