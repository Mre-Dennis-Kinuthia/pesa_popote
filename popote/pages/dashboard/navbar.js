import React, { useState } from 'react';
import { RiDashboardLine, RiUserLine, RiSettingsLine } from 'react-icons/ri';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
import Link from 'next/link'; // Import the Link component
import './styles.css';
import Logo from './logo';

export default function DashboardNavbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-blue-500 lg:w-1/5">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Use Link instead of anchor element */}
                    <Link href="/">
                        <a className="text-white text-xl font-bold flex items-center">
                            <Logo className="h-6 w-6 mr-2" />
                            Popote
                        </a>
                    </Link>
                    <button
                        className="text-black focus:outline-none lg:hidden"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path className="heroicon-ui" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isSidebarOpen ? 'block' : 'hidden'
                        } lg:flex lg:flex-row-reverse lg:justify-end`}
                >
                    <div className="lg:w-9/12" style={{ margin: '20px' }}>
                        <div className="flex flex-col h-screen">
                            {/* Use Link instead of anchor elements */}
                            <Link href="/">
                                <a className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md font-bold">
                                    <RiDashboardLine className="mr-2" />
                                    Dashboard
                                </a>
                            </Link>
                            <Link href="/accounts">
                                <a className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md">
                                    <AiOutlineUsergroupAdd className="mr-2" />
                                    Accounts
                                </a>
                            </Link>
                            <Link href="/management">
                                <a className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md">
                                    <FiDatabase className="mr-2" />
                                    Management
                                </a>
                            </Link>
                            <Link href="/users">
                                <a className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md">
                                    <RiUserLine className="mr-2" />
                                    Users
                                </a>
                            </Link>
                            <Link href="/settings">
                                <a className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md">
                                    <RiSettingsLine className="mr-2" />
                                    Settings
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
