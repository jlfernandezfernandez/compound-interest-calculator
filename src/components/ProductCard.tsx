import { useAppDispatch } from '@/store';
import { removeProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, productTypes } from '@/financial_products/productTypes';
import ProductForm from './ProductForm';
import ProductResult from './ProductResult';

export default function ProductCard({ productDetails }: { productDetails: ProductDetails }) {
    const productInfo = productTypes[productDetails.type] || { emoji: '', title: '' };
    const dispatch = useAppDispatch();

    const handleRemoveProduct = () => {
        console.log(productDetails);
        dispatch(removeProduct(productDetails.id));
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-7 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
                <div className="text-center text-xl mb-6">
                    {productInfo.emoji} {productInfo.title}
                </div>
                <button
                    onClick={handleRemoveProduct}
                    className="text-xs text-red-600 hover:text-red-800 p-1"
                >
                    Eliminar
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProductForm productDetails={productDetails} />
                <ProductResult productDetails={productDetails} />
            </div>
        </div>
    );
}
