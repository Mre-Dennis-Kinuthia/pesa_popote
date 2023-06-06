import { Client } from '@paymentsds/mpesa';

const client = new Client({
  apiKey: '<REPLACE>',             // API Key
  publicKey: '<REPLACE>',          // Public Key
  serviceProviderCode: '<REPLACE>' // Service Provider Code
});

export const simulateMpesaExpressTransaction = (amount, phoneNumber) => {
  const paymentData = {
    to: phoneNumber,               // Customer MSISDN
    reference: '11114',            // Third Party Reference
    transaction: 'T12344CC',       // Transaction Reference
    amount: amount                  // Amount
  };

  return client.send(paymentData)
    .then(response => {
      // Handle success scenario
      console.log('Payment successful', response);
    })
    .catch(error => {
      // Handle failure scenario
      console.error('Payment failed', error);
    });
};

// Other M-Pesa API integration functions can be added here

export default client;
