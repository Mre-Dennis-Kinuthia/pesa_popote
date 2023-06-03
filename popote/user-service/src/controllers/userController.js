import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  createUser,
  // Define more controller functions as needed
};