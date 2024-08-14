import React, { useCallback } from "react";
import { useAppDispatch } from "@/store";
import {
  removeProduct,
  updateProduct,
} from "@/store/calculator/calculatorSlice";
import {
  ProductDetails,
  productTypes,
} from "@/financial_products/productTypes";
import ProductForm from "./ProductForm";
import ProductResult from "./ProductResult";
import { Trash2, Edit2 } from "lucide-react";

export default function ProductCard({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const productInfo = productTypes[productDetails.type] || {
    emoji: "",
    title: "",
  };
  const dispatch = useAppDispatch();

  const handleRemoveProduct = useCallback(() => {
    dispatch(removeProduct(productDetails.id));
  }, [dispatch, productDetails.id]);

  const handleChange = useCallback(
    (field: keyof ProductDetails, value: string | number) => {
      const updatedProductDetails = { ...productDetails, [field]: value };
      dispatch(updateProduct(updatedProductDetails));
    },
    [dispatch, productDetails]
  );

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-300 h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center flex-grow">
          <span className="text-2xl mr-2 sm:mr-3" aria-hidden="true">
            {productInfo.emoji}
          </span>
          <div className="relative flex-grow max-w-[200px] sm:max-w-[250px]">
            <input
              type="text"
              placeholder={productInfo.title}
              value={productDetails.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="text-md sm:text-lg bg-transparent hover:border-b border-gray-200 focus:border-gray-400 outline-none transition-colors duration-300 w-full pr-8"
              maxLength={17}
              aria-label={`Nombre del ${productInfo.title}`}
            />
            <Edit2 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleRemoveProduct}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
            aria-label={`Descartar ${productDetails.name || productInfo.title}`}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <ProductForm productDetails={productDetails} />
        <ProductResult productDetails={productDetails} />
      </div>
    </div>
  );
}
