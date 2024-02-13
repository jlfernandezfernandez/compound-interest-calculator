import { useAppDispatch } from '@/store';
import { updateProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, periods,  } from '@/financial_products/productTypes';

export default function ProductForm({ productDetails }: { productDetails: ProductDetails }) {
    const dispatch = useAppDispatch();

    const handleChange = (field: keyof ProductDetails, value: string) => {
        const updatedProductDetails = {
            ...productDetails,
            [field]: value
        };
        dispatch(updateProduct(updatedProductDetails));
    };

    const handleChangeNumber = (field: keyof ProductDetails, value: number) => {
        const updatedProductDetails = {
            ...productDetails,
            [field]: value
        };
        dispatch(updateProduct(updatedProductDetails));
    };

    return (
        <div className="p-1 grid grid-cols-1 gap-4">
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_name`} className="font-semibold">Nombre Personalizado</label>
                <input
                    id={`${productDetails.id}_name`}
                    type="text"
                    placeholder="Inversiones en MyInvestor"
                    autoComplete='off'
                    value={productDetails.name || ''}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="input border p-2 rounded"
                />
            </div>
            <div className="flex flex-col"> {/* Esto hará que ocupe tres columnas */}
                <label htmlFor={`${productDetails.id}_initialAmount`} className="font-semibold">Cantidad Inicial</label>
                <input
                    id={`${productDetails.id}_initialAmount`}
                    type="number"
                    placeholder="3000"
                    value={productDetails.initialAmount || ''}
                    onChange={(e) => handleChangeNumber('initialAmount', Number(e.target.value))}
                    className="input border p-2 rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_contribution`} className="font-semibold">Depósito Periódico</label>
                <input
                    id={`${productDetails.id}_contribution`}
                    type="number"
                    placeholder="250"
                    value={productDetails.contribution || ''}
                    onChange={(e) => handleChangeNumber('contribution', Number(e.target.value))}
                    className="input border p-2 rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_contributionFrequency`} className="font-semibold">Periodicidad</label>
                <select
                    id={`${productDetails.id}_contributionFrequency`}
                    value={productDetails.contributionFrequency || ''}
                    onChange={(e) => handleChangeNumber('contributionFrequency', Number(e.target.value))}
                    className="input border p-2 rounded"
                >
                    {periods.map(frequency => (
                        <option key={frequency.value} value={frequency.time}>
                            {frequency.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_interestRate`} className="font-semibold">Interés Anual</label>
                <input
                    id={`${productDetails.id}_interestRate`}
                    type="number"
                    value={productDetails.interestRate || ''}
                    onChange={(e) => handleChangeNumber('interestRate', Number(e.target.value))}
                    placeholder="3.5"
                    className="input border p-2 rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_duration`} className="font-semibold">Años de Duración</label>
                <input
                    id={`${productDetails.id}_duration`}
                    type="number"
                    placeholder="25"
                    value={productDetails.duration || ''}
                    onChange={(e) => handleChangeNumber('duration', Number(e.target.value))}
                    className="input border p-2 rounded"
                />
            </div>
            {/*<div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_capitalizationPeriod`} className="font-semibold">Capitalización</label>
                <select
                    id={`${productDetails.id}_capitalizationPeriod`}
                    value={productDetails.capitalizationPeriod || ''}
                    onChange={(e) => handleChangeNumber('capitalizationPeriod', Number(e.target.value))}
                    className="input border p-2 rounded"
                >
                    {periods.map(frequency => (
                        <option key={frequency.value} value={frequency.time}>
                            {frequency.label}
                        </option>
                    ))}
                </select>
            </div>*/}
        </div>
    );
}
