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
        <div className="max-w-3xl mx-auto bg-white p-7 rounded-lg shadow-lg">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                    <span className="text-xl">{productInfo.emoji}</span>
                    <input
                        type="text"
                        placeholder={productInfo.title} // Usar el título como placeholder si el nombre no está establecido
                        value={productDetails.name}
                        onChange={(e) => (console.log(e.target.value))}
                        className="ml-2 text-xl bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 outline-none" // Estilo para el input
                        style={{ transition: 'border-color 0.3s ease', maxWidth: '200px' }} // Transición suave para el color del borde
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
