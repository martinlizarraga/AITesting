'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function Profile() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <Layout darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Profile
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                Account Information
                            </h3>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <p className="mt-1 text-gray-900 dark:text-white">
                                        user@example.com
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Plan
                                    </label>
                                    <p className="mt-1 text-gray-900 dark:text-white">
                                        Pro
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 