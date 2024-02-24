import React from 'react';
import BuyMeACoffeeButton from "./BuyMeACoffeButton";

export default function Footer() {
    return (
        <div className="mt-1 left-0 w-full bg-white text-white text-center py-3 flex justify-between px-6">
            <div className="flex items-center">
                <BuyMeACoffeeButton />
            </div>
            <div className="flex items-center">
                <p className='text-sm text-black'>2024</p>
            </div>
        </div>
    )
}
