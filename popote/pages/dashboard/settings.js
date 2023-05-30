import React, { useState } from 'react';
import './styles.css';

// Define your settings categories and their corresponding settings
const settingsCategories = [
    {
        id: 'userProfile',
        name: 'User Profile',
        settings: [
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'changeEmail', label: 'Change Email', type: 'text' },
            { id: 'changePassword', label: 'Change Password', type: 'password' },
            { id: 'profilePicture', label: 'Profile Picture', type: 'file' },
        ],
    },
    {
        id: 'accountSettings',
        name: 'Account Settings',
        settings: [
            { id: 'disableAccount', label: 'Disable Account', type: 'checkbox' },
            { id: 'deleteAccount', label: 'Delete Account', type: 'checkbox' },
        ],
    },
];

export default function SettingsPage() {
    const [settingsData, setSettingsData] = useState({});

    // Handle changes in the settings data
    const handleSettingsChange = (category, settingId, value) => {
        setSettingsData(prevSettingsData => ({
            ...prevSettingsData,
            [category]: {
                ...prevSettingsData[category],
                [settingId]: value,
            },
        }));
    };

    // Save the settings data
    const saveSettings = () => {
        // Implement your logic to save the settings data
        console.log('Settings saved:', settingsData);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>

            {/* Render settings categories */}
            {settingsCategories.map(category => (
                <div key={category.id} className="my-8">
                    <h2 className="text-xl font-semibold mb-4">{category.name}</h2>

                    {/* Render settings within each category */}
                    {category.settings.map(setting => (
                        <div key={setting.id} className="flex items-center mb-4">
                            <label className="w-48">{setting.label}</label>

                            {/* Render different input types based on setting type */}
                            {setting.type === 'text' && (
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={settingsData?.[category.id]?.[setting.id] || ''}
                                    onChange={e => handleSettingsChange(category.id, setting.id, e.target.value)}
                                />
                            )}

                            {setting.type === 'email' && (
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={settingsData?.[category.id]?.[setting.id] || ''}
                                    onChange={e => handleSettingsChange(category.id, setting.id, e.target.value)}
                                />
                            )}

                            {setting.type === 'select' && (
                                <select
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={settingsData?.[category.id]?.[setting.id] || ''}
                                    onChange={e => handleSettingsChange(category.id, setting.id, e.target.value)}
                                >
                                    {setting.options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                </div>
            ))}

            {/* Save settings button */}
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={saveSettings}
            >
                Save Settings
            </button>
        </div>
    );
}
