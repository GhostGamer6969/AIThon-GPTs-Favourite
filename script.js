let currentUserId = null;
let currentUserPassword = null;

function login() {
    const userId = document.getElementById('login-user-id').value;
    const password = document.getElementById('login-password').value;

    if (!userId || !password) {
        alert('Please enter both User ID and Password');
        return;
    }

    const userData = JSON.parse(localStorage.getItem(userId));
    if (userData && userData.password === password) {
        currentUserId = userId;
        currentUserPassword = password;
        loadUserData(userId);

        // Hide login and show wallet
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('wallet-container').style.display = 'block';
    } else {
        alert('Invalid User ID or Password');
    }
}

function register() {
    const userId = document.getElementById('register-user-id').value;
    const password = document.getElementById('register-password').value;

    if (!userId || !password) {
        alert('Please enter both User ID and Password');
        return;
    }

    const existingUserData = JSON.parse(localStorage.getItem(userId));
    if (existingUserData) {
        alert('User ID already exists. Please choose a different User ID.');
        return;
    }

    // Save new user data
    const userData = {
        balance: 100,
        transactions: [],
        password: password
    };
    localStorage.setItem(userId, JSON.stringify(userData));
    alert('User registered successfully! You can now log in.');

    // Switch to login form
    document.getElementById('register-user-id').value = '';
    document.getElementById('register-password').value = '';
}

function logout() {
    currentUserId = null;
    currentUserPassword = null;

    // Clear session and reset the wallet display
    document.getElementById('wallet-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('login-user-id').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('register-user-id').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('transaction-list').innerHTML = '';
    document.getElementById('balance').innerText = '0';
}

function loadUserData(userId) {
    const userData = JSON.parse(localStorage.getItem(userId));
    if (userData) {
        balance = userData.balance || 0;
        transactionHistory = userData.transactions || [];
    } else {
        balance = 100;
        transactionHistory = [];
    }
    updateBalance();
    renderTransactionHistory();
}

function saveUserData() {
    if (!currentUserId) return;

    const userData = {
        balance: balance,
        transactions: transactionHistory,
        password: currentUserPassword
    };
    localStorage.setItem(currentUserId, JSON.stringify(userData));
}

let balance = 0;
let transactionHistory = [];

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function addTransactionToHistory(transaction) {
    transactionHistory.push(transaction);
    renderTransactionHistory();
}

function renderTransactionHistory() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    transactionHistory.forEach((transaction) => {
        const transactionItem = document.createElement('li');
        transactionItem.innerText = `Sent $${transaction.amount} to ${transaction.recipient} on ${transaction.date}`;
        transactionList.appendChild(transactionItem);
    });
}

function performTransaction() {
    const recipientId = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!recipientId || amount <= 0 || amount > balance) {
        alert('Invalid transaction. Please check the details.');
        return;
    }

    // Check if recipient exists
    const recipientData = JSON.parse(localStorage.getItem(recipientId));
    if (!recipientData) {
        alert('Recipient does not exist.');
        return;
    }

    // Perform transaction
    balance -= amount;
    recipientData.balance += amount;

    // Update local storage
    saveUserData();
    localStorage.setItem(recipientId, JSON.stringify(recipientData));

    // Add transaction to history
    const transaction = {
        recipient: recipientId,
        amount: amount,
        date: new Date().toLocaleString(),
    };

    addTransactionToHistory(transaction);

    // Clear inputs after transaction
    document.getElementById('recipient').value = '';
    document.getElementById('amount').value = '';

    // Update balance display
    updateBalance();
}

// Initialize the wallet on page load if the user is logged in
window.onload = function () {
    if (currentUserId) {
        loadUserData(currentUserId);
    }
};
