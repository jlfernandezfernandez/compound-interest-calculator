import React, { ChangeEvent } from 'react';

interface CustomInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    symbol: string;
}

const CustomInput = ({ value, onChange, placeholder, className, symbol }: CustomInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        onChange(inputValue);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={className}
                style={{
                    textAlign: 'center' // Alinea el texto a la derecha
                }}
            />
            <span style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>{symbol}</span>
        </div>
    );
};

export default CustomInput;
