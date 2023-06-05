import { createUser } from './users';

export default async function signup(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = await createUser(firstName, lastName, email, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}