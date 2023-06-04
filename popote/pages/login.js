// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { compareSync } from 'bcryptjs';
import { findUserByEmail } from './api/auth.js'; // Import the function


export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate user credentials
        const user = await findUserByEmail(email);

        if (!user || !compareSync(password, user.password)) {
            setError('Invalid email or password');
            return;
        }

        // Generate session token (JWT)
        const token = generateSessionToken();

        // Store session token (e.g., in a cookie or local storage)

        // Redirect user to authenticated page
        router.push('/dashboard');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

// Function to generate a session token (JWT)
function generateSessionToken() {
    // Generate and sign the token
    // You can use a library like `jsonwebtoken` to accomplish this
    // Return the generated token
}
