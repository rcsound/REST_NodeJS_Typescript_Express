up:
	docker compose up -d

build:
	docker compose build

js:
	npm run build

down:
	docker compose down -v

up dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

