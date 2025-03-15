'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function Services() {
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
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Audio Separation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Isolate or remove specific instruments from your audio tracks using our advanced AI technology.
                        </p>
                    </div>
                    {/* Add more service cards as needed */}
                </div>
            </div>
        </Layout>
    );
} 