import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(firstName, lastName, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });

        return newUser;
    } catch (error) {
        throw new Error('An error occurred while creating the user');
    }
}
