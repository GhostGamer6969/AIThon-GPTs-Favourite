# C-Pay: Crypto Wallet Simulator with Gamification

**C-Pay** is a basic crypto wallet simulator that enables users to store and transfer different cryptocurrencies. The project includes gamification elements, such as achievements and rewards, to enhance the user experience and engagement.

## Features

- **Balances Display**: View the balances of various cryptocurrencies in your wallet.
- **Transaction History**: Track all of your cryptocurrency transactions with ease.
- **Transfer Functionality**: Transfer cryptocurrency to other users in a simple, user-friendly way.
- **Gamification**: Earn badges and rewards based on your transaction activity, motivating users to interact with the wallet.

## Project Structure

```
c-pay/
│
├── backend/
│   └── index.js          # Backend server code (Node.js + Express)
│
├── frontend/
│   ├── index.html        # Basic frontend with HTML and CSS
│   ├── style.css         # Stylesheet for the frontend
│   └── script.js         # Frontend logic to interact with the backend
│
└── README.md             # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (version 14 or above)
- A web browser (Chrome, Firefox, etc.)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/c-pay.git
cd c-pay
```

### 2. Set Up the Backend

Navigate to the `backend` directory and install the necessary dependencies:

```bash
cd backend
npm install
```

### 3. Running the Backend

To start the backend server on `http://localhost:3000`, run the following command:

```bash
node index.js
```

The backend will be running, allowing you to interact with the C-Pay wallet services.

### 4. Set Up the Frontend

Simply open the `index.html` file in your web browser by double-clicking it or serving it via a local server.

### 5. Usage

Once both the frontend and backend are set up:

- Open `index.html` in your browser.
- View balances, transaction history, and badges on the C-Pay dashboard.
- Use the form to transfer cryptocurrency to another user.
- Watch your badges accumulate as you perform transactions.

### API Endpoints

- **GET /wallet/user1**: Fetches the current balances, transactions, and badges of the user.
- **POST /wallet/user1/transfer**: Allows transferring cryptocurrency to a recipient. Requires `currency`, `amount`, and `recipient` in the request body.

### Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Gamification**: Achievements and badges for transaction milestones

## Future Enhancements

- Support for additional users and currencies.
- More advanced gamification elements, such as levels or quests.
- Integration with real blockchain networks for live transactions.

## Contributing

If you'd like to contribute to C-Pay, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
