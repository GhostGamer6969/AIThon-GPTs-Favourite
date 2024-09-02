const express = require('express');
const Wallet = require('../models/Wallet');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.get('/balance', authenticateToken, async (req, res) => {
      try {
              const wallet = await Wallet.findOne({ where: { userId: req.user.userId } });
              if (!wallet) return res.status(404).json({ error: 'Wallet not found' });
              res.json({ balance: wallet.balance });
            } catch (error) {
                    res.status(500).json({ error: 'Error fetching balance' });
                  }
});

module.exports = router;

