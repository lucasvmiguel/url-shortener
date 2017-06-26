# url-shortener

This project creates short URLS to share.
By default, this application will not run with mongo, but you can change this in [server config](server)

## Requirements
* Nodejs
* Docker running with sudo (you can run in local cache mode if you prefer. see the server [README](server))
* Makefile (you can run without it, but you will need to start the server and the client)

## Installation
```bash
make install
```

## Quick Start
```bash
make run_container (if you configurated to run with mongo on server)
make run_server
make run_client
```

## Applications

This project contains two applications:
* [Client side](client)
* [Server side](server)

## License

[MIT](LICENSE)
