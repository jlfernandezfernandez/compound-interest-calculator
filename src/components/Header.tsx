'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './HomeIcon';
import ArrowRightIcon from './ArrowRightIcon';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'font-bold' : '';
    };

    return (
        <header className="border-b p-4 bg-white">
            <div className="flex items-center space-x-8">
                <Link href="/" className='flex items-center text-lg font-semibold'>
                    <HomeIcon className="h-6 w-6" />
                    Inicio
                </Link>
                <Link href="/calculadora-interes-compuesto" className={`flex items-center ml-auto text-xl tracking-tighter ${isActive('/calculadora-interes-compuesto')}`}>
                    Calculadora
                </Link>
                <Link href="/mejora-tus-resultados" className="flex items-center ml-auto text-sm">
                    <span className={`${isActive('/mejora-tus-resultados')}`}>Mejora tus resultados</span>
                    <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>
        </header>
    );
}
