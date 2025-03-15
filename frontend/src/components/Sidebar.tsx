'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, WrenchScrewdriverIcon, ClockIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Services', href: '/services', icon: WrenchScrewdriverIcon },
    { name: 'History', href: '/history', icon: ClockIcon },
    { name: 'Profile', href: '/profile', icon: UserCircleIcon },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <nav className="p-4 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
} 