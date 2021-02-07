

kubeDeploy:
kubeDeploy:

rmImage:
rmImage:
	docker rmi imagenodeapp

installPackages:
installPackages:
	cd src && npm install

startDevDockerComposeLive:
startDevDockerComposeLive:
	cd deployments/docker/dev && docker-compose up --build

restartDevDockerComposeLive:
restartDevDockerComposeLive:
	cd deployments/docker/dev && docker-compose restart

stopDevDockerComposeLive:
stopDevDockerComposeLive:
	cd deployments/docker/dev && docker-compose stop

rmDevDockerComposeLive:
rmDevDockerComposeLive:
	cd deployments/docker/dev && docker-compose rm

startDockerCompose:
startDockerCompose:
	docker-compose up -d


