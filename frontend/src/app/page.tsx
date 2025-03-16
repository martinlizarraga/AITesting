'use client';

import Layout from '@/components/Layout';
import { useDarkMode } from '@/context/DarkModeContext';

export default function Home() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <Layout darkMode={darkMode} onDarkModeToggle={toggleDarkMode}>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Welcome to Siren.ai
                </h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Enhance Your Musical Journey
                    </h2>
                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                        Siren.ai is your ultimate companion for music practice and learning. Our advanced AI-powered tool helps musicians of all levels play along with their favorite songs by isolating specific instruments.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        How It Works
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                Isolate Instruments
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Upload any song and separate it into individual instrument tracks. Practice with or without specific instruments to perfect your parts.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                Practice Effectively
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Remove the instrument you play to create the perfect backing track. Learn parts more easily by isolating specific instruments.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Perfect For
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Musicians looking to practice with their favorite songs</li>
                        <li>Music teachers creating educational materials</li>
                        <li>Band members learning new parts</li>
                        <li>Anyone wanting to study specific elements of a song</li>
                    </ul>
                </section>

                <div className="mt-8">
                    <a
                        href="/services"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Started with Audio Separation
                    </a>
                </div>
            </div>
        </Layout>
    );
} 