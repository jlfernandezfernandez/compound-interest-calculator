import React, { useState } from "react";
import { useAppDispatch } from "@/store";
import { updateProduct } from "@/store/calculator/calculatorSlice";
import { ProductDetails, periods } from "@/financial_products/productTypes";
import NumberInput from "./NumberInput";

export default function ProductForm({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const dispatch = useAppDispatch();
  const [modifiedFields, setModifiedFields] = useState({
    initialAmount: false,
    contribution: false,
    contributionFrequency: false,
    interestRate: false,
    duration: false,
  });

  const handleChangeNumber = (
    field: keyof ProductDetails,
    value: undefined | number
  ) => {
    const updatedProductDetails = { ...productDetails, [field]: value };
    dispatch(updateProduct(updatedProductDetails));
    setModifiedFields({ ...modifiedFields, [field]: true });
  };

  return (
    <div className="space-y-6">
      <NumberInput
        id={`${productDetails.id}_initialAmount`}
        label="Cantidad Inicial"
        value={
          modifiedFields.initialAmount
            ? productDetails.initialAmount
            : undefined
        }
        placeholder="3000"
        unit="€"
        onChange={(value) => handleChangeNumber("initialAmount", value)}
      />
      <NumberInput
        id={`${productDetails.id}_contribution`}
        label="Depósito Periódico"
        value={
          modifiedFields.contribution ? productDetails.contribution : undefined
        }
        placeholder="250"
        unit="€"
        onChange={(value) => handleChangeNumber("contribution", value)}
      />
      <div className="flex flex-col">
        <label
          htmlFor={`${productDetails.id}_contributionFrequency`}
          className="block text-sm font-medium text-gray-700"
        >
          Periodicidad
        </label>
        <select
          id={`${productDetails.id}_contributionFrequency`}
          value={productDetails.contributionFrequency || ""}
          onChange={(e) =>
            handleChangeNumber("contributionFrequency", Number(e.target.value))
          }
          className="input border p-2 rounded border-gray-200 focus:border-gray-400"
        >
          {periods.map((frequency) => (
            <option key={frequency.value} value={frequency.time}>
              {frequency.label}
            </option>
          ))}
        </select>
      </div>
      <NumberInput
        id={`${productDetails.id}_interestRate`}
        label="Interés Anual"
        value={
          modifiedFields.interestRate ? productDetails.interestRate : undefined
        }
        placeholder="3.5"
        unit="%"
        onChange={(value) => handleChangeNumber("interestRate", value)}
      />
      <NumberInput
        id={`${productDetails.id}_duration`}
        label="Duración"
        value={modifiedFields.duration ? productDetails.duration : undefined}
        placeholder="25"
        unit="años"
        onChange={(value) => handleChangeNumber("duration", value)}
      />
    </div>
  );
}
