import React, { useState } from "react";

interface NumberInputProps {
  id: string;
  label: string;
  unit: string;
  value: number | undefined;
  placeholder?: string;
  onChange: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberInput({
  id,
  label,
  unit,
  value,
  placeholder,
  onChange,
  min,
  max,
  step,
}: NumberInputProps) {
  // Estado local de texto para permitir escribir decimales a medias ("3.")
  const [text, setText] = useState(value?.toString() ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setText(raw);
    onChange(raw === "" ? undefined : parseFloat(raw));
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setText(raw);
    onChange(parseFloat(raw));
  };

  const hasSlider = min !== undefined && max !== undefined;

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
          value={text}
          onChange={handleChange}
          className="flex-1 outline-none min-w-0"
        />
        <span className="text-gray-500">{unit}</span>
      </div>
      {hasSlider && (
        <input
          type="range"
          aria-label={`${label} (deslizador)`}
          min={min}
          max={max}
          step={step ?? 1}
          value={value ?? min}
          onChange={handleSlider}
          className="mt-2 w-full accent-leaf cursor-pointer"
        />
      )}
    </div>
  );
}
