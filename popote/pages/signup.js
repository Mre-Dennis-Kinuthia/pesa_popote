import React from 'react';
import { useState } from 'react';
import './signup.css';

export default function Signup(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch('/api/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({firstName, lastName, email, password }),
            });
            if (response.ok){
                const data = await response.json();
                console.log(data);// user created successfully
            } else{
                console.error('Error creating user');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}


/*const SignupPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="signup">
            <div className="text">
                <h1>Signup</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="first_name" placeholder='First Name' />
                    <input type="text" id="last_name" placeholder='Last Name' />
                </div>
                <div>
                    <input type="email" id="email" placeholder='Example@email.com' />
                </div>
                <div>
                    <input type="phone" id="phone" placeholder='Phone Number' />
                </div>
                <div>
                    <input type="password" id="password" placeholder='Password' />
                </div>
                <div>
                    <input type="password" id="password_confirm" placeholder='Confirm Password' />
                </div>
                <div >
                    <label htmlFor="terms" className="terms">
                        <input type="checkbox" id="terms" name="terms" value="terms" />
                        I agree to the terms and conditions
                    </label>
                </div>

                <div className="btn-group">
                    <button className="btn-style-submit" type="submit">Sign Up</button>
                    <button className="btn-style-return" type="button">
                        <Link href="/">
                            <span className="link">Return Home</span>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;*/