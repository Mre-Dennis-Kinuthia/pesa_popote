// mpesaController.js

// Import necessary libraries and modules
const axios = require('axios');

// Constants for M-Pesa API endpoints and credentials
const MPESA_API_BASE_URL = 'https://api.safaricom.co.ke';
const MPESA_AUTH_URL = `${MPESA_API_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`;
const MPESA_STK_PUSH_URL = `${MPESA_API_BASE_URL}/mpesa/stkpush/v1/processrequest`;

// M-Pesa credentials
const MPESA_CONSUMER_KEY = 'YOUR_MPESA_CONSUMER_KEY';
const MPESA_CONSUMER_SECRET = 'YOUR_MPESA_CONSUMER_SECRET';
const MPESA_SHORT_CODE = 'YOUR_MPESA_SHORT_CODE';
const MPESA_PASSKEY = 'YOUR_MPESA_PASSKEY';
const MPESA_CALLBACK_URL = 'YOUR_MPESA_CALLBACK_URL';

// Controller method for initiating the M-Pesa STK push
async function initiateSTKPush(phoneNumber, amount, description) {
  try {
    // Generate access token
    const accessToken = await generateAccessToken();

    // Create request payload
    const payload = {
      BusinessShortCode: MPESA_SHORT_CODE,
      Password: generateSTKPassword(),
      Timestamp: getTimestamp(),
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: MPESA_SHORT_CODE,
      PhoneNumber: phoneNumber,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: 'YOUR_ACCOUNT_REFERENCE',
      TransactionDesc: description,
    };

    // Send STK push request to M-Pesa API
    const response = await axios.post(MPESA_STK_PUSH_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Return the response from the M-Pesa API
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Failed to initiate STK push:', error);
    throw error;
  }
}

// Helper function to generate the access token
async function generateAccessToken() {
  try {
    // Encode consumer key and secret
    const authString = `${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`;
    const encodedAuthString = Buffer.from(authString).toString('base64');

    // Generate access token using the encoded auth string
    const response = await axios.get(MPESA_AUTH_URL, {
      headers: {
        Authorization: `Basic ${encodedAuthString}`,
      },
    });

    // Return the access token from the response
    return response.data.access_token;
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Failed to generate access token:', error);
    throw error;
  }
}

// Helper function to generate the STK password
function generateSTKPassword() {
  const timestamp = getTimestamp();
  const passkey = MPESA_PASSKEY;
  const shortcode = MPESA_SHORT_CODE;

  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
}

// Helper function to get the current timestamp in the required format
function getTimestamp() {
  return new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
}

module.exports = {
  initiateSTKPush,
};
