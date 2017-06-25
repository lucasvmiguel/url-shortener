run_server:
	@echo '##### RUNNING SERVER #####'
	cd server && npm start

run_client:
	@echo '##### RUNNING CLIENT #####'
	cd client && npm start

run_container:
	@echo '##### RUNNING MONGO CONTAINER #####'
	cd server && sudo docker run -it -v $(pwd)/data:/data/db -p 27017:27017 -d mongo

install:
	@echo '##### INSTALL DEPENDENCIES #####'
	sudo docker pull mongo
	cd server && npm install && cd ..
	cd client && npm install && cd ..