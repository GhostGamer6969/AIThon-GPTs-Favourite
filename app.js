const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./db');

// Import routes
 const authRoutes = require('./routes/auth');
 const walletRoutes = require('./routes/wallet');
 const transferRoutes = require('./routes/transfer');
 const transactionRoutes = require('./routes/transactions');

     dotenv.config();

     const app = express();
 app.use(cors());
 app.use(express.json());

    // Set up routes
 app.use('/api/auth', authRoutes);
 app.use('/api/wallet', walletRoutes);
 app.use('/api/transfer', transferRoutes);
 app.use('/api/transactions', transactionRoutes);

     const PORT = process.env.PORT || 5000;

     app.listen(PORT, () => {
           console.log(`Server running on port ${PORT}`);
             sequelize.sync({ force: true }).then(() => console.log('Database synced'));
             });
