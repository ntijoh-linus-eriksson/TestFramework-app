# TestFramework-app
Starta docker: docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres

Starta cypress: yarn run cypress open

Starta PlayWright: (Stå i root dir) npx playwright test --ui