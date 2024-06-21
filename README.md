# Express Secret Key Generator

This repository contains an Express.js application that generates secure random secret keys for various cryptographic uses. The application provides endpoints to generate 256-bit and 512-bit keys, as well as API access keys and JWT secrets, which can be used for authentication, data encryption, and other security purposes.

## Features

- **Generate 256-bit keys**: Secure random keys suitable for use as JWT secrets, API keys, and more.
- **Generate 512-bit keys**: Even stronger secure random keys for enhanced security needs.
- **Generate API access keys**: Secure random keys for frontend and backend access control.
- **Generate JWT secrets**: Secure random keys specifically for JWT authentication.

## Endpoints

- **`/api`**: Returns a random API access key.
- **`/bit256`**: Returns a 256-bit random secret key in hex format.
- **`/bit512`**: Returns a 512-bit random secret key in hex format.
- **`/jwt`**: Returns a random secret key suitable for JWT authentication.

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/express-secret-key-generator.git
    ```

2. Install dependencies:
    ```sh
    cd express-secret-key-generator
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
      ```env
      PORT=3000
      COOKIE_SECRET_KEY=your-cookie-secret-key
      ```

4. Run the application:
    ```sh
    node app.js
    ```

5. Access the endpoints:
    - `http://localhost:3000/api`
    - `http://localhost:3000/bit256`
    - `http://localhost:3000/bit512`
    - `http://localhost:3000/jwt`

## Technologies Used

- **Node.js**
- **Express.js**
- **Crypto**

## API Documentation

This application uses Swagger for API documentation. Once the application is running, you can access the Swagger UI at `http://localhost:3000/api-docs`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

