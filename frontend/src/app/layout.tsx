import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Audio Separator - AI-Powered Audio Processing',
    description: 'Remove instruments from your audio files using AI technology',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ClientWrapper>
                    {children}
                </ClientWrapper>
            </body>
        </html>
    );
} 