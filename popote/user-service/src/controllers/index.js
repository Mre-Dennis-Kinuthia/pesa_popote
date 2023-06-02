const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Example function to create a new user
async function createUser(data) {
  const user = await prisma.user.create({ data });
  return user;
}

module.exports = {
  createUser,
};
