import React from 'react';

export default function Logo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`logo ${props.className}`}
            style={{ marginLeft: '20px' }}
        >
            <path d="M9 2L4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-5-4H9zm7 2v3h3M6 15h12M6 19h12" />
        </svg>
    );
}
