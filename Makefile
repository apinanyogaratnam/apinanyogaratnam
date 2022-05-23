IMAGE := apinanyogaratnam
VERSION := 0.0.1
REGISTRY_URL := ghcr.io/apinanyogaratnam/${IMAGE}:${VERSION}

build:
	docker build -t ${IMAGE} .
	# docker buildx build --platform=linux/amd64 -t ${IMAGE} .

run:
	docker run -d -p 3000:3000 ${IMAGE}

exec:
	docker exec -it $(sha) /bin/sh

auth:
	grep -v '^#' .env.local | grep -e "CR_PAT" | sed -e 's/.*=//' | docker login ghcr.io -u USERNAME --password-stdin

tag:
	docker tag ${IMAGE} ${REGISTRY_URL}
	git tag -m "v${VERSION}" v${VERSION}

push:
	docker push ${REGISTRY_URL}
	git push --tags

all:
	make build && make auth && make tag && make push
