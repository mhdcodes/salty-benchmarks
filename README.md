# Salty Benchmarks


## Setup Instructions

This project includes benchmarks for different server technologies, including Hono, Bun, and Dumbo. Below are the instructions for setting up and running each server.

**Setting up Bun**

To run the Bun server, you need to have Bun installed on your system. You can download and install Bun from the official Bun website: https://bun.sh/docs/installation

Alternatively, you can run the following script to install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

**Setting up PHP**

To run the Dumbo server, you need to have PHP installed on your system. You can download and install PHP from the official PHP website: https://www.php.net/downloads

Alternatively, you can run the following script to install PHP on a Debian-based system:

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3 php8.3-cli php8.3-{bz2,curl,mbstring}
```

**Setting up FrankenPHP**

To run the Dumbo server, you need to have FrankenPHP downloaded to your system. You can download FrankenPHP manually from the official GitHub repository: https://github.com/dunglas/frankenphp/releases

Alternatively, you can run the following script to download FrankenPHP on a Debian-based system and save it to the project root:

```bash
curl -L https://github.com/dunglas/frankenphp/releases/download/v1.2.5/frankenphp-linux-x86_64 -o frankenphp
sudo chmod +x ./frankenphp
```

## Install Instructions

Before running any script, ensure you have installed the project dependencies using the following commands:

```bash
# JS
pnpm install

# PHP
composer install
```

## Run Instructions

**Available Scripts**

The following scripts are available in the `package.json` file to run the servers:

* `hono:simple`: Runs the Hono server with a simple setup.
* `hono:sqlite`: Runs the Hono server with SQLite database integration.
* `bun:simple`: Runs the Bun server with a simple setup.
* `bun:sqlite`: Runs the Bun server with SQLite database integration.
* `bun:simple:mc`: Runs the Bun server with a simple setup and multi-core support.
* `bun:sqlite:mc`: Runs the Bun server with SQLite database integration and multi-core support.
* `dumbo:simple`: Runs the Dumbo server with a simple setup.
* `dumbo:sqlite`: Runs the Dumbo server with SQLite database integration.

To run a server, navigate to the project directory in your terminal and execute the corresponding script. For example, to run the Hono server with a simple setup, run:

```bash
pnpm run hono:simple
```

Replace `hono:simple` with the script you want to run.