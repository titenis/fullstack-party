#!/bin/bash

if [ -f .env ];
then
    set -a
    source .env
    docker-compose -f docker-compose.dev.yml up
else
    echo "Please copy .env.sample to .env"
fi
