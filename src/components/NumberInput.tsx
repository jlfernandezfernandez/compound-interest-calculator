import React, { useState } from 'react';

interface NumberInputProps {
    id: string;
    label: string;
    unit: string;
    value: number | undefined;
    placeholder?: string;
    onChange: (value: number | undefined) => void;
}

export default function NumberInputWithLabel({
    id,
    label,
    unit,
    value,
    placeholder,
    onChange,
}: NumberInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "") {
            onChange(undefined);
        } else {
            onChange(parseFloat(value));
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-semibold">{label}</label>
            <div className={`flex items-center border p-2 rounded ${isFocused ? 'border-gray-400' : 'border-gray-00'}`}>
                <input
                    id={id}
                    type="number"
                    placeholder={placeholder}
                    value={value !== undefined ? value : ''}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="flex-1 outline-none"
                />
                <span className="text-gray-500">{unit}</span>
            </div>
        </div>
    );
}
