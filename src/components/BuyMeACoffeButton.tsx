'use client'

import React from 'react';

export default function BuyMeACoffeeButton() {
    const handleClick = () => {
        console.log('Botón "Invítame a un café" pulsado.');
    };

    return (
        <a href="https://www.buymeacoffee.com/jordiluiss" target="_blank" rel="noopener noreferrer" 
           className="text-sm bg-gray-800 text-white py-2 px-4 rounded-md"
           onClick={handleClick}>
            Invítame a un café
            <span role="img" aria-label="café" className="ml-2">☕</span>
        </a>
    );
}
