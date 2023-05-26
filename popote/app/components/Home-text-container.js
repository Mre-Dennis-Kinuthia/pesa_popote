import React from "react";
import "../styles/styles.css"; // Import the CSS file

export default function HomeTextContainer() {
    return (
        <div className="page-container">
            <div className="home-text-container">
                <h1>Welcome to Pesa Popote</h1>
                <p className="paragraph">
                    Pesa Popote is your one-stop financial platform, designed to make your payment and transaction experience as smooth as possible. With Pesa Popote, you can effortlessly manage your finances, send and receive payments, and stay on top of your transaction history.
                    <br /><br />
                    Our user-friendly interface ensures a seamless navigation experience. Whether you're a business owner looking to streamline your payment processes or an individual wanting to keep track of your personal finances, Pesa Popote has got you covered.
                </p>
            </div>
        </div>
    );
}
