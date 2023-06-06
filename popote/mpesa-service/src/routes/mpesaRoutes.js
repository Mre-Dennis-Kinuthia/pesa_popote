// mpesaRoutes.js

// Import necessary modules and controllers
const express = require('express');
const mpesaController = require('../controllers/mpesaController');

// Create a router instance
const router = express.Router();

// Define the route for initiating M-Pesa STK push
router.post('/stkpush', async (req, res) => {
  try {
    // Extract the required data from the request body
    const { phoneNumber, amount, description } = req.body;

    // Initiate the M-Pesa STK push
    const result = await mpesaController.initiateSTKPush(phoneNumber, amount, description);

    // Return the result as a response
    res.json(result);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Failed to initiate M-Pesa STK push:', error);
    res.status(500).json({ error: 'Failed to initiate M-Pesa STK push' });
  }
});

// Export the router
module.exports = router;
