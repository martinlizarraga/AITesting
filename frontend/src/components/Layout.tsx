'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
    darkMode: boolean;
    onDarkModeToggle: () => void;
}

export default function Layout({ children, darkMode, onDarkModeToggle }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle} />
            <Sidebar />
            <main className="pl-64 pt-16">
                <div className="max-w-6xl mx-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
} 