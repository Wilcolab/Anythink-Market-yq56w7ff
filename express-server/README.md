# Express Server

This project is a simple Express server that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies**:
   This project uses Yarn for package management. Run the following command to install the necessary dependencies:
   ```bash
   yarn install
   ```

3. **Run the server**:
   Use the following command to start the server with Nodemon:
   ```bash
   yarn start
   ```

   The server will be running on [http://localhost:8001](http://localhost:8001).

## Docker

To run the server in a Docker container, you can build the Docker image using the provided Dockerfile. Use the following commands:

1. **Build the Docker image**:
   ```bash
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 8001:8001 express-server
   ```

## License

This project is licensed under the MIT License.