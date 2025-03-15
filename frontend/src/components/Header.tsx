'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    darkMode: boolean;
    onDarkModeToggle: () => void;
}

export default function Header({ darkMode, onDarkModeToggle }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
            <div className="flex items-center justify-between h-full px-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    siren.ai
                </h1>
                <button
                    onClick={onDarkModeToggle}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700
                   hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    {darkMode ? (
                        <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                    ) : (
                        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                    )}
                </button>
            </div>
        </header>
    );
} 