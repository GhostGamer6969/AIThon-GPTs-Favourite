const express = require('express');
const Transaction = require('../models/Transaction');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
      try {
              const transactions = await Transaction.findAll({ where: { senderId: req.user.userId } });
              res.json({ transactions });
            } catch (error) {
                    res.status(500).json({ error: 'Error fetching transactions' });
                  }
});

module.exports = router;

