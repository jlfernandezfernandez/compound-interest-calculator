import { useAppDispatch } from '@/store';
import { removeProduct, updateProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, productTypes } from '@/financial_products/productTypes';
import ProductForm from './ProductForm';
import ProductResult from './ProductResult';

export default function ProductCard({ productDetails }: { productDetails: ProductDetails }) {
    const productInfo = productTypes[productDetails.type] || { emoji: '', title: '' };
    const dispatch = useAppDispatch();
    const isMobile = window.innerWidth < 600;

    const handleRemoveProduct = () => {
        console.log(productDetails);
        dispatch(removeProduct(productDetails.id));
    };

    const handleChange = (field: keyof ProductDetails, value: string) => {
        const updatedProductDetails = {
            ...productDetails,
            [field]: value
        };
        dispatch(updateProduct(updatedProductDetails));
    };

    return (
        <div className="max-w-5xl mx-auto w-full bg-white p-5 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <span className="text-xl">{productInfo.emoji}</span>
                    <input
                        type="text"
                        placeholder={productInfo.title}
                        value={productDetails.name}
                        onChange={(e) => (handleChange('name', e.target.value))}
                        className="ml-2 text-xl bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 outline-none"
                        style={{ transition: 'border-color 0.3s ease', maxWidth: '200px' }}
                        maxLength={17}
                    />
                </div>
                <button
                    onClick={handleRemoveProduct}
                    className="text-xs text-red-600 hover:text-red-800 p-2"
                >
                    {isMobile ? '🗑️' : 'Descartar'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProductForm productDetails={productDetails} />
                <ProductResult productDetails={productDetails} />
            </div>
        </div>

    );
}
