import React from 'react';
import BuyMeACoffeeButton from "./BuyMeACoffeButton";

export default function Footer() {
    return (
        <div className="bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-3 flex justify-between px-6">
            <div className="flex items-center">
                <BuyMeACoffeeButton />
            </div>
            <div className="flex items-center">
                <p>2024</p>
            </div>
        </div>
    )
}
