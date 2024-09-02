const express = require('express');
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/transfer', authenticateToken, async (req, res) => {
      try {
              const { recipientId, amount, currency } = req.body;
              const senderWallet = await Wallet.findOne({ where: { userId: req.user.userId, currency } });
              const recipientWallet = await Wallet.findOne({ where: { userId: recipientId, currency } });

              if (!senderWallet || !recipientWallet) return res.status(404).json({ error: 'Wallet not found' });
              if (senderWallet.balance < amount) return res.status(400).json({ error: 'Insufficient balance' });

              senderWallet.balance -= amount;
              recipientWallet.balance += amount;

              await senderWallet.save();
              await recipientWallet.save();

              await Transaction.create({ senderId: req.user.userId, recipientId, amount, currency });

              res.json({ message: 'Transfer successful' });
            } catch (error) {
                    res.status(500).json({ error: 'Error processing transfer' });
                  }
});

module.exports = router;
