# C_Pay API

## Overview

The C_Pay API is a RESTful API built using Node.js and Express for managing users, wallets, and transactions. It uses Sequelize to interact with a MySQL database. The API allows you to create, retrieve, update, and delete users, wallets, and transactions.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your database:**

   Ensure you have MySQL running and create a database named `c_pay`. Update the database configuration in `app.js` if needed.

4. **Run database migrations and sync models:**

   ```bash
   npm run migrate
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

## API Endpoints

### Users

- **Create a new user**

  ```http
  POST /api/users
  ```

  **Request Body:**

  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

  **Response:**

  ```json
  {
    "message": "User created successfully",
    "user": {
      "id": "number",
      "username": "string",
      "email": "string"
    }
  }
  ```

- **Get all users**

  ```http
  GET /api/users
  ```

  **Response:**

  ```json
  [
    {
      "id": "number",
      "username": "string",
      "email": "string"
    }
  ]
  ```

- **Get a user by ID**

  ```http
  GET /api/users/:id
  ```

  **Response:**

  ```json
  {
    "id": "number",
    "username": "string",
    "email": "string"
  }
  ```

- **Update a user by ID**

  ```http
  PUT /api/users/:id
  ```

  **Request Body:**

  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```

  **Response:**

  ```json
  {
    "message": "User updated successfully"
  }
  ```

- **Delete a user by ID**

  ```http
  DELETE /api/users/:id
  ```

  **Response:**

  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### Wallets

- **Create a wallet for a user**

  ```http
  POST /api/wallets
  ```

  **Request Body:**

  ```json
  {
    "userId": "number"
  }
  ```

  **Response:**

  ```json
  {
    "message": "Wallet created successfully",
    "wallet": {
      "id": "number",
      "userId": "number",
      "balance": "number"
    }
  }
  ```

- **Get a wallet by ID**

  ```http
  GET /api/wallets/:id
  ```

  **Response:**

  ```json
  {
    "id": "number",
    "userId": "number",
    "balance": "number"
  }
  ```

- **Update a wallet by ID**

  ```http
  PUT /api/wallets/:id
  ```

  **Request Body:**

  ```json
  {
    "balance": "number"
  }
  ```

  **Response:**

  ```json
  {
    "message": "Wallet updated successfully"
  }
  ```

- **Delete a wallet by ID**

  ```http
  DELETE /api/wallets/:id
  ```

  **Response:**

  ```json
  {
    "message": "Wallet deleted successfully"
  }
  ```

### Transactions

- **Create a new transaction**

  ```http
  POST /api/transactions
  ```

  **Request Body:**

  ```json
  {
    "senderId": "number",
    "recipientId": "number",
    "amount": "number",
    "currency": "string"
  }
  ```

  **Response:**

  ```json
  {
    "message": "Transaction processed successfully",
    "transaction": {
      "id": "number",
      "senderId": "number",
      "recipientId": "number",
      "amount": "number",
      "currency": "string"
    }
  }
  ```

- **Get all transactions**

  ```http
  GET /api/transactions
  ```

  **Response:**

  ```json
  [
    {
      "id": "number",
      "senderId": "number",
      "recipientId": "number",
      "amount": "number",
      "currency": "string"
    }
  ]
  ```

- **Get a transaction by ID**

  ```http
  GET /api/transactions/:id
  ```

  **Response:**

  ```json
  {
    "id": "number",
    "senderId": "number",
    "recipientId": "number",
    "amount": "number",
    "currency": "string"
  }
  ```

- **Update a transaction by ID**

  ```http
  PUT /api/transactions/:id
  ```

  **Request Body:**

  ```json
  {
    "amount": "number",
    "currency": "string"
  }
  ```

  **Response:**

  ```json
  {
    "message": "Transaction updated successfully"
  }
  ```

- **Delete a transaction by ID**

  ```http
  DELETE /api/transactions/:id
  ```

  **Response:**

  ```json
  {
    "message": "Transaction deleted successfully"
  }
  ```

## Running Tests

Tests are not yet implemented. You may need to add test scripts using a testing framework like Mocha, Chai, or Jest.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
