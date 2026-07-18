import React from "react";

interface NumberInputProps {
  id: string;
  label: string;
  unit: string;
  value: number | undefined;
  placeholder?: string;
  onChange: (value: number | undefined) => void;
}

export default function NumberInput({
  id,
  label,
  unit,
  value,
  placeholder,
  onChange,
}: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value === "" ? undefined : parseFloat(value));
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="flex items-center border p-2 rounded border-gray-200 focus-within:border-leaf transition-colors duration-150">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          placeholder={placeholder}
          defaultValue={value}
          onChange={handleChange}
          className="flex-1 outline-none"
        />
        <span className="text-gray-500">{unit}</span>
      </div>
    </div>
  );
}
