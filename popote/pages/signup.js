import React from 'react';
import Link from 'next/link';
import './signup.css';

const SignupPage = () => {
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
                <div className="form-group">
                    <input type="text" id="first_name" placeholder="First Name" />
                    <input type="text" id="last_name" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input type="email" id="email" placeholder="Example@email.com" />
                </div>
                <div className="form-group">
                    <input type="phone" id="phone" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" id="password_confirm" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="terms" className="terms">
                        <input type="checkbox" id="terms" name="terms" value="terms" />
                        I agree to the terms and conditions
                    </label>
                </div>

                <div className="btn-group">
                    <button className="btn-style-submit" type="submit">
                        <Link href="/">
                            <span className="link">Submit</span>
                        </Link>
                    </button>
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

export default SignupPage;
