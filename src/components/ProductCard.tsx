import React from "react";
import { useProducts } from "@/store";
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
  const { removeProduct, updateProduct } = useProducts();

  const productInfo = productTypes[productDetails.type];

  const handleRemoveProduct = () => removeProduct(productDetails.id);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateProduct({ ...productDetails, name: e.target.value });

  return (
    <div className="@container bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ backgroundColor: `${productInfo.color}1f` }}
          aria-hidden="true"
        >
          {productInfo.emoji}
        </span>
        <div className="relative min-w-0 flex-1 max-w-[240px]">
          <input
            type="text"
            placeholder={productInfo.title}
            value={productDetails.name || ""}
            onChange={handleNameChange}
            className="w-full font-display font-semibold text-ink bg-transparent border-b border-transparent hover:border-gray-200 focus:border-leaf outline-none transition-colors duration-200 pr-6 peer"
            maxLength={24}
            aria-label={`Nombre del ${productInfo.title}`}
          />
          <Edit2
            className="absolute right-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300 peer-focus:opacity-0 transition-opacity"
            aria-hidden="true"
          />
        </div>
        <button
          onClick={handleRemoveProduct}
          className="text-gray-400 hover:text-red-600 transition-[color,background-color,scale] duration-200 active:scale-90 p-2 rounded-full hover:bg-gray-100 shrink-0"
          aria-label={`Descartar ${productDetails.name || productInfo.title}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <ProductForm productDetails={productDetails} />
      <div className="mt-auto">
        <ProductResult productDetails={productDetails} />
      </div>
    </div>
  );
}
