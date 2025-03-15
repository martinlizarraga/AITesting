'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import FileUpload from '@/components/FileUpload';
import InstrumentSelector from '@/components/InstrumentSelector';
import ProcessingStatus from '@/components/ProcessingStatus';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedInstrument, setSelectedInstrument] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [processedFileUrl, setProcessedFileUrl] = useState<string | null>(null);

    useEffect(() => {
        // Check system preference for dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Apply dark mode class to document
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

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

    return (
        <Layout darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)}>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Audio Separator
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Remove instruments from your audio files using AI
                    </p>
                </div>

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
        </Layout>
    );
} 