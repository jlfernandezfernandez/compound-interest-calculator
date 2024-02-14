import { useAppDispatch } from '@/store';
import { updateProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, periods, } from '@/financial_products/productTypes';
import NumberInput from './NumberInput';

export default function ProductForm({ productDetails }: { productDetails: ProductDetails }) {
    const dispatch = useAppDispatch();

    const handleChangeNumber = (field: keyof ProductDetails, value: undefined | number) => {
        const updatedProductDetails = {
            ...productDetails,
            [field]: value
        };
        dispatch(updateProduct(updatedProductDetails));
    };

    return (
        <div className="p-1 grid grid-cols-1 gap-4">
            <NumberInput
                id={`${productDetails.id}_initialAmount`}
                label="Cantidad Inicial"
                value={productDetails.initialAmount}
                placeholder="3000"
                unit="€"
                onChange={(value) => handleChangeNumber('initialAmount', value)}
            />
            <NumberInput
                id={`${productDetails.id}_contribution`}
                label="Depósito Periódico"
                value={productDetails.contribution}
                placeholder="250"
                unit="€"
                onChange={value => handleChangeNumber('contribution', value)}
            />
            <div className="flex flex-col">
                <label htmlFor={`${productDetails.id}_contributionFrequency`} className="font-semibold">Periodicidad</label>
                <select
                    id={`${productDetails.id}_contributionFrequency`}
                    value={productDetails.contributionFrequency || ''}
                    onChange={(e) => handleChangeNumber('contributionFrequency', Number(e.target.value))}
                    className="input border p-2 rounded border-gray-200 focus:border-gray-400"
                >
                    {periods.map(frequency => (
                        <option key={frequency.value} value={frequency.time}>
                            {frequency.label}
                        </option>
                    ))}
                </select>
            </div>
            <NumberInput
                id={`${productDetails.id}_interestRate`}
                label="Interés Anual"
                value={productDetails.interestRate}
                placeholder="3.5"
                unit="%"
                onChange={value => handleChangeNumber('interestRate', value)}
            />
            <NumberInput
                id={`${productDetails.id}_duration`}
                label="Duración"
                value={productDetails.duration}
                placeholder="25"
                unit="años"
                onChange={value => handleChangeNumber('duration', value)}
            />
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
