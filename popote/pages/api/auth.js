// api/user.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findUserByEmail(email) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    return user;
}
