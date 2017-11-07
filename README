# Build and run development environment with Docker


build image
```
docker image build --tag tlkuo/jekyll-dev:2.0 .
```

run image
```
docker run -p 4000:4000 -v $(pwd):/root/tlkuo.github.io tlkuo/jekyll-dev:2.0
```

attach shell
```
docker run -it -p 4000:4000 -v $(pwd):/root/tlkuo.github.io tlkuo/jekyll-dev:2.0 /bin/bash
```

list all container
```
docker ps -a
```

remove all container
```
docker rm $(docker ps -aq)

```
