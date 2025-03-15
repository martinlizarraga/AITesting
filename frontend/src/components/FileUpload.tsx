'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    selectedFile: File | null;
}

export default function FileUpload({ onFileSelect, selectedFile }: FileUploadProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'audio/mpeg': ['.mp3'],
            'audio/wav': ['.wav'],
        },
        maxFiles: 1,
    });

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`p-8 border-2 border-dashed rounded-lg transition-colors ${isDragActive
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-700'
                    }`}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center text-center">
                    <CloudArrowUpIcon className="w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {isDragActive
                            ? 'Drop the audio file here'
                            : 'Drag & drop an audio file here'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        or click to select a file
                    </p>
                    {selectedFile && (
                        <p className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                            Selected: {selectedFile.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
} 