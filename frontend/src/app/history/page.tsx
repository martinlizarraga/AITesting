'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function History() {
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
                    Processing History
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {/* Example history items - replace with actual data */}
                        <div className="p-6">
                            <p className="text-gray-900 dark:text-white font-medium">
                                song.mp3
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Processed 2 hours ago • Removed: Vocals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 