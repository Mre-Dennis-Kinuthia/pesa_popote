const express = require('express');
const mpesaRoutes = require('./mpesaRoutes');

const router = express.Router();

// Add M-Pesa route
router.use('/mpesa', mpesaRoutes);

// Add other routes as needed
module.exports = router;
