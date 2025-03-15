'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface ProcessingStatusProps {
    isProcessing: boolean;
    processedFileUrl: string | null;
    onDownload: () => void;
}

export default function ProcessingStatus({
    isProcessing,
    processedFileUrl,
    onDownload,
}: ProcessingStatusProps) {
    if (!isProcessing && !processedFileUrl) {
        return null;
    }

    return (
        <div className="w-full mt-6">
            {isProcessing && (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                        Processing your audio file...
                    </span>
                </div>
            )}

            {!isProcessing && processedFileUrl && (
                <button
                    onClick={onDownload}
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 
                   hover:bg-blue-700 text-white rounded-lg transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   dark:focus:ring-offset-gray-900"
                >
                    <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                    Download Processed Audio
                </button>
            )}
        </div>
    );
} 