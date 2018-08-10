# Great task for Great Fullstack Developer

## Requirements

- `Docker ^17.05`
- `Docker-compose ^1.22.0`
 
## How to run 
- create github app
- create and update .ENV files `ui/docker/.env`, `api/.env`, `api/docker/.env`

## DEV RUN
- `cd api/docker && ./start_dev.sh`
- `cd ui/docker && ./start_dev.sh`

## DEV STOP
- `cd api/docker && ./stop_dev.sh`
- `cd ui/docker && ./stop_dev.sh`

## PROD RUN
- `cd api/docker && ./start_prod.sh`
- `cd ui/docker && ./start_prod.sh`

## PROD STOP
- `cd api/docker && ./stop_prod.sh`
- `cd ui/docker && ./stop_prod.sh`