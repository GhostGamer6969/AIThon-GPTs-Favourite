const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
const port = 5000;

// Database setup
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Users'
});

// Wallet model
const Wallet = sequelize.define('Wallet', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'CASCADE'  // Automatically delete wallet when user is deleted
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Wallets'
});

// Define relationship
User.hasOne(Wallet, { foreignKey: 'userId', onDelete: 'CASCADE' });
Wallet.belongsTo(User, { foreignKey: 'userId' });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// POST: Create a new user and automatically create a wallet for the user
app.post('/api/users', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const newUser = await User.create({
      username,
      password,
      email,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const newWallet = await Wallet.create({
      userId: newUser.id,
      currency: 'USD',  // Default currency for the wallet
      createdAt: new Date(),
      updatedAt: new Date()
    });

    res.status(201).json({
      message: `User ${username} created successfully with a linked wallet`,
      user: newUser,
      wallet: newWallet
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user and wallet' });
  }
});

// GET: Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll({ include: Wallet });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
});

// GET: Get a single user by ID
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id, { include: Wallet });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user' });
  }
});

// PUT: Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.username = username || user.username;
      user.email = email || user.email;
      user.updatedAt = new Date();
      await user.save();
      res.status(200).json({ message: `Updated user ${id}`, user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// DELETE: Delete a user by ID (which will automatically delete the associated wallet)
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();  // This will also delete the associated wallet due to CASCADE
      res.status(200).json({ message: `Deleted user ${id}` });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Wallet Endpoints
app.get('/api/wallets', async (req, res) => {
  try {
    const wallets = await Wallet.findAll();
    res.status(200).json(wallets);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving wallets' });
  }
});

app.get('/api/wallets/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Wallet ID is required' });
  }
  try {
    const wallet = await Wallet.findByPk(id);
    if (wallet) {
      res.status(200).json(wallet);
    } else {
      res.status(404).json({ error: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving wallet' });
  }
});

app.put('/api/wallets/:id', async (req, res) => {
  const { id } = req.params;
  const { balance, currency } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'Wallet ID is required' });
  }
  try {
    const wallet = await Wallet.findByPk(id);
    if (wallet) {
      wallet.balance = balance !== undefined ? balance : wallet.balance;
      wallet.currency = currency || wallet.currency;
      wallet.updatedAt = new Date();
      await wallet.save();
      res.status(200).json({ message: `Updated wallet ${id}`, wallet });
    } else {
      res.status(404).json({ error: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating wallet' });
  }
});

app.delete('/api/wallets/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Wallet ID is required' });
  }
  try {
    const wallet = await Wallet.findByPk(id);
    if (wallet) {
      await wallet.destroy();
      res.status(200).json({ message: `Deleted wallet ${id}` });
    } else {
      res.status(404).json({ error: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting wallet' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Sync database (for testing only, remove or comment out in production)
sequelize.sync();
