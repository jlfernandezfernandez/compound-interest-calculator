import React from "react";
import { useProducts } from "@/store";
import { ProductDetails, periods } from "@/financial_products/productTypes";
import NumberInput from "./NumberInput";

export default function ProductForm({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const { updateProduct } = useProducts();

  const handleChangeNumber = (
    field: keyof ProductDetails,
    value: number | undefined
  ) => {
    updateProduct({ ...productDetails, [field]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
      <NumberInput
        id={`${productDetails.id}_initialAmount`}
        label="Cantidad Inicial"
        value={productDetails.initialAmount}
        placeholder="3000"
        unit="€"
        min={0}
        max={100000}
        step={500}
        onChange={(value) => handleChangeNumber("initialAmount", value)}
      />
      <NumberInput
        id={`${productDetails.id}_contribution`}
        label="Depósito Periódico"
        value={productDetails.contribution}
        placeholder="250"
        unit="€"
        min={0}
        max={2000}
        step={25}
        onChange={(value) => handleChangeNumber("contribution", value)}
      />
      <div className="flex flex-col">
        <label
          htmlFor={`${productDetails.id}_contributionFrequency`}
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Periodicidad
        </label>
        <select
          id={`${productDetails.id}_contributionFrequency`}
          value={productDetails.contributionFrequency || ""}
          onChange={(e) =>
            handleChangeNumber("contributionFrequency", Number(e.target.value))
          }
          className="border p-2 rounded-lg border-gray-200 focus:border-leaf outline-none bg-white h-[42px]"
        >
          {periods.map((frequency) => (
            <option key={frequency.value} value={frequency.time}>
              {frequency.label}
            </option>
          ))}
        </select>
        {/* Alinea con el slider de Duración en la misma fila (solo en 2 columnas) */}
        <div className="mt-2 h-4 hidden sm:block" aria-hidden="true" />
      </div>
      <NumberInput
        id={`${productDetails.id}_duration`}
        label="Duración"
        value={productDetails.duration}
        placeholder="25"
        unit="años"
        min={1}
        max={50}
        step={1}
        onChange={(value) => handleChangeNumber("duration", value)}
      />
      <div className="sm:col-span-2">
        <NumberInput
          id={`${productDetails.id}_interestRate`}
          label="Interés Anual"
          value={productDetails.interestRate}
          placeholder="3.5"
          unit="%"
          min={0}
          max={15}
          step={0.1}
          onChange={(value) => handleChangeNumber("interestRate", value)}
        />
      </div>
    </div>
  );
}
