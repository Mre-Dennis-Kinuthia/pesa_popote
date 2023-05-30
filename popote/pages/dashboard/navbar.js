import React, { useState } from 'react';
import { RiDashboardLine, RiUserLine, RiSettingsLine } from 'react-icons/ri';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
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
                    <a className="text-white text-xl font-bold flex items-center" href="#">
                        <Logo className="h-6 w-6 mr-2" />
                        Popote
                    </a>
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
                            <a
                                className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md font-bold"
                                href="/"
                            >
                                <RiDashboardLine className="mr-2" />
                                Dashboard
                            </a>
                            <a
                                className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md"
                                href="/accounts"
                            >
                                <AiOutlineUsergroupAdd className="mr-2" />
                                Accounts
                            </a>
                            <a
                                className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md"
                                href="/management"
                            >
                                <FiDatabase className="mr-2" />
                                Management
                            </a>
                            <a
                                className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md"
                                href="/users"
                            >
                                <RiUserLine className="mr-2" />
                                Users
                            </a>
                            <a
                                className="text-white flex items-center px-4 py-2 hover:bg-blue-700 border-b border-blue-500 rounded-md"
                                href="/settings"
                            >
                                <RiSettingsLine className="mr-2" />
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}