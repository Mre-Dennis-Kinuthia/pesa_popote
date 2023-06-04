import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function signup(req, res) {
    const { firstName, lastName, email, password } = req.body;

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        //create the new user
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
}
// api/user.js