import React, { useCallback, useMemo } from "react";
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

  const handleChangeNumber = useCallback(
    (field: keyof ProductDetails, value: number | undefined) => {
      dispatch(updateProduct({ ...productDetails, [field]: value }));
    },
    [dispatch, productDetails]
  );

  const handleChangeFrequency = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      handleChangeNumber("contributionFrequency", Number(e.target.value));
    },
    [handleChangeNumber]
  );

  const periodOptions = useMemo(
    () =>
      periods.map((frequency) => (
        <option key={frequency.value} value={frequency.time}>
          {frequency.label}
        </option>
      )),
    []
  );

  return (
    <div className="space-y-6">
      <NumberInput
        id={`${productDetails.id}_initialAmount`}
        label="Cantidad Inicial"
        value={productDetails.initialAmount}
        placeholder="3000"
        unit="€"
        onChange={(value) => handleChangeNumber("initialAmount", value)}
      />
      <NumberInput
        id={`${productDetails.id}_contribution`}
        label="Depósito Periódico"
        value={productDetails.contribution}
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
          onChange={handleChangeFrequency}
          className="input border p-2 rounded border-gray-200 focus:border-gray-400"
        >
          {periodOptions}
        </select>
      </div>
      <NumberInput
        id={`${productDetails.id}_interestRate`}
        label="Interés Anual"
        value={productDetails.interestRate}
        placeholder="3.5"
        unit="%"
        onChange={(value) => handleChangeNumber("interestRate", value)}
      />
      <NumberInput
        id={`${productDetails.id}_duration`}
        label="Duración"
        value={productDetails.duration}
        placeholder="25"
        unit="años"
        onChange={(value) => handleChangeNumber("duration", value)}
      />
    </div>
  );
}
