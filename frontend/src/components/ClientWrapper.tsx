'use client';

import { useEffect, useState } from 'react';
import { DarkModeProvider } from '@/context/DarkModeContext';

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <DarkModeProvider>{children}</DarkModeProvider>;
} 