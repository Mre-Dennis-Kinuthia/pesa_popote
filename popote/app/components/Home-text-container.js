import React from "react";
import "../styles/tailstyles.css"; // Import the CSS file
import Link from 'next/link'

export default function HomeTextContainer() {
    return (
        <div className="page-container mx-auto overflow-x-hidden">
            <div className="home-text-container flex justify-center items-center h-60 w-99 bg-white absolute top-12.5 left-0.5">
                <div className="top-text text-3xl font-bold text-black w-1000">
                    <center>
                        <h1>
                            <span>The one platform that consolidates your business financial needs</span>
                        </h1>
                    </center>
                </div>
                <div className="sub-text text-3xl font-light text-gray-500 w-800">
                    <center>
                        <p className="paragraph">
                            Pesa Popote, your universal financial platform, simplifying transactions from anywhere.
                        </p>
                    </center>
                </div>
            </div>
            <div className="calltoactionbtn">
                <button className="btn-style-cat bg-blue-500 text-white py-2 px-4 rounded">
                    <Link href="/Register">
                        <span className="link ">Try it</span>
                    </Link>
                </button>
            </div>
            <div className="dashboard-snippet h-1/2 w-60 border border-black rounded-md bg-aqua absolute top-1/2 left-20 mx-auto overflow-x-hidden"></div>
        </div>
    );
}