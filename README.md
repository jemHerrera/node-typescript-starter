# Node-TypeScript-Postgres Starter

A dockerized starter Node Express project with Typescript and Postgres

## Setup

`npm i`

## Development

`docker compose -f docker-compose.dev.yml up`
`docker compose -f docker-compose.dev.yml up --build`

## Production

`docker compose up`

## MikroORM create migration files

`npm run create-migration`

## MikroORM migrate to DB

`npm run migrate`
