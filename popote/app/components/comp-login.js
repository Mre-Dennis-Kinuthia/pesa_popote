import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import '@/app/utils/Firebase'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Firebase login logic
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Handle successful login
            })
            .catch((error) => {
                // Handle login error
            });
    };
    
    return(
        <main>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </main>
    )
}