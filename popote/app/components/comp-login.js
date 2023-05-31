import React, { useState } from 'react';

export default function Login(){
    return(
        <main>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
            />
            <button>Login</button>
        </main>
    )
}