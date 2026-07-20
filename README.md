# Quote-App
Quote App is a web application designed to provide users with random quote inspirations.


## Installation
Installation & Setup
Prerequisites
Node.js (v16+ recommended)
npm

1) Clone the repository
git clone <git@github.com>:ike-agu/Quote-App.git
cd Quote-App
2) Install dependencies
npm install
3) Start the backend server
node backend/server.js
The server will run on: <http://localhost:3000>

4) Serve the frontend
From the project root:

npx serve frontend
Open the URL shown in the terminal in your browser.

## How to run Dockerfile
Open your terminal in the directory where your Dockerfile is and run:

- docker build -t test-build . && docker run -it --rm -p 3000:3000 test-build

### Run this command in your terminal to stop all running Dockerfiles
If you have another Docker container running:
. docker stop $(docker ps -q)

## Change the local port number

If you need to keep your existing server running on port 3000, you can tell Docker to map a different port on your Mac (like 3001) to port 3000 inside the container:

- docker run -it --rm -p 3001:3000 test-build
