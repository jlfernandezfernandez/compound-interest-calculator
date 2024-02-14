import { useAppDispatch } from '@/store';
import { removeProduct, updateProduct } from '@/store/calculator/calculatorSlice';
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

    const handleChange = (field: keyof ProductDetails, value: string) => {
        const updatedProductDetails = {
            ...productDetails,
            [field]: value
        };
        dispatch(updateProduct(updatedProductDetails));
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-7 rounded-lg shadow-lg">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                    <span className="text-xl">{productInfo.emoji}</span>
                    <input
                        type="text"
                        placeholder={productInfo.title}
                        value={productDetails.name}
                        onChange={(e) => (handleChange('name', e.target.value))}
                        className="ml-2 mr-5 pl-1 text-xl bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 outline-none"
                        style={{ transition: 'border-color 0.3s ease', maxWidth: '180px', borderRadius: '0' }}
                        maxLength={15}
                    />
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
