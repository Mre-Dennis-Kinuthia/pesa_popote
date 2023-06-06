import { PrismaClient } from '@prisma/client';
import { initiatePayment } from '@/lib/mpesa'; // Assuming you have a separate file for the M-Pesa integration logic

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { phoneNumber, amount } = req.body;

    try {
        // Create a payment record in the database
        const payment = await prisma.payment.create({
            data: {
                phoneNumber,
                amount,
                status: 'pending',
            },
        });

        // Initiate the payment with M-Pesa
        const paymentResult = await initiatePayment(phoneNumber, amount);

        // Update the payment status based on the result
        await prisma.payment.update({
            where: { id: payment.id },
            data: {
                status: paymentResult.status,
                // Update other relevant payment details as needed
            },
        });

        return res.status(200).json({ message: 'Payment initiated successfully' });
    } catch (error) {
        console.error('Error initiating payment:', error);
        return res.status(500).json({ error: 'An error occurred while initiating payment' });
    }
}
