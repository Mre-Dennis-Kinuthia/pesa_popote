import React from 'react';
import '../styles/styles.css'; // Import the CSS file
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className="nav-btn-group">
        <button className="btn-style">
            <Link href="/">
              <span className="link">Home</span>
            </Link>
        </button>
        <button className="btn-style">
            <Link href="/how-it-works">
              <span className="link">How It Works</span>
            </Link>
        </button>
        <button className="btn-style">
            <Link href="/contact-us">
              <span className="link">Contact Us</span>
            </Link>
        </button>
      </div>

      <div className="nav-cat-btn-group">
        <button className="btn-style-cat">
          <Link href="/login">
            <span className="link">Login</span>
          </Link>
        </button>
        <button className="btn-style-cat">
          <Link href="/Register">
            <span className="link">Register</span>
          </Link>
        </button>
      </div>
    </nav>
  );
}