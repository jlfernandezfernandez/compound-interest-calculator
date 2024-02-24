import React from 'react';
import Link from 'next/link';
import HomeIcon from './HomeIcon';
import ArrowRightIcon from './ArrowRightIcon';

export default function Header() {
    return (
        <header className="border-b p-4 bg-white">
            <div className="flex items-center space-x-8">
                <Link className="flex items-center text-lg font-semibold" href="/">
                    <HomeIcon className="h-6 w-6" />
                    Inicio
                </Link>
                <h1 className="text-xl font-bold tracking-tighter">Calculadora</h1>
                <Link className="flex items-center ml-auto text-sm" href="/">
                    Mejora tus resultados                    
                    <ArrowRightIcon className="h-4 w-4s" />
                </Link>
            </div>
        </header>
    )
}
