'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import FileUpload from '@/components/FileUpload';
import InstrumentSelector from '@/components/InstrumentSelector';
import ProcessingStatus from '@/components/ProcessingStatus';
import { useDarkMode } from '@/context/DarkModeContext';

export default function Services() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedInstrument, setSelectedInstrument] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [processedFileUrl, setProcessedFileUrl] = useState<string | null>(null);
    const [activeService, setActiveService] = useState('filtering');

    const handleSubmit = async () => {
        if (!selectedFile || !selectedInstrument) return;

        setIsProcessing(true);
        setProcessedFileUrl(null);

        // Create form data
        const formData = new FormData();
        formData.append('audio', selectedFile);
        formData.append('instrument', selectedInstrument);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            // In a real app, you would make an actual API call here
            // const response = await fetch('/api/process', {
            //   method: 'POST',
            //   body: formData,
            // });
            // const data = await response.json();

            // Simulate processed file URL
            setProcessedFileUrl('dummy-processed-file.mp3');
        } catch (error) {
            console.error('Error processing file:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownload = () => {
        // In a real app, this would download the actual processed file
        if (processedFileUrl) {
            window.open(processedFileUrl, '_blank');
        }
    };

    const services = [
        {
            id: 'filtering',
            name: 'Audio Filtering',
            description: 'Separate instruments from your music files',
            icon: '🎵'
        }
        // Add more services here in the future
    ];

    return (
        <Layout darkMode={darkMode} onDarkModeToggle={toggleDarkMode}>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Our Services
                </h1>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Service Navigation */}
                    <div className="md:col-span-1">
                        <div className="space-y-2">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeService === service.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="mr-2">{service.icon}</span>
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="md:col-span-3">
                        {activeService === 'filtering' && (
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                    Audio Filtering
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Upload your music file and select which instrument you want to remove or isolate.
                                    Perfect for practice sessions or creating backing tracks.
                                </p>

                                <div className="space-y-8">
                                    <FileUpload
                                        onFileSelect={setSelectedFile}
                                        selectedFile={selectedFile}
                                    />

                                    <InstrumentSelector
                                        selectedInstrument={selectedInstrument}
                                        onInstrumentChange={setSelectedInstrument}
                                    />

                                    {selectedFile && selectedInstrument && !isProcessing && !processedFileUrl && (
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white 
                                                rounded-lg transition-colors focus:outline-none focus:ring-2 
                                                focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                        >
                                            Process Audio
                                        </button>
                                    )}

                                    <ProcessingStatus
                                        isProcessing={isProcessing}
                                        processedFileUrl={processedFileUrl}
                                        onDownload={handleDownload}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
} 