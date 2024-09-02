const express = require('express');
const router = express.Router();
const { User, Wallet } = require('../app'); // Ensure this path matches your setup

router.post('/', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const user = await User.create({ username, password, email });
    const wallet = await Wallet.create({ userId: user.id });
    res.status(201).json({ message: `User ${username} created successfully`, user, wallet });
  } catch (err) {
    res.status(500).json({ error: 'Error creating user', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving users', details: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving user', details: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();
    res.status(200).json({ message: `Updated user ${id}`, user });
  } catch (err) {
    res.status(500).json({ error: 'Error updating user', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: `Deleted user ${id}` });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user', details: err.message });
  }
});

module.exports = router;
