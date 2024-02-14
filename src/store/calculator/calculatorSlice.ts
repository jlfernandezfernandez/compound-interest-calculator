import { ProductDetails, YearlyTotals } from "@/financial_products/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Asumiendo que tienes definida tu interfaz ProductDetails como antes la mostraste

interface CalculatorState {
    products: ProductDetails[];
}

const initialState: CalculatorState = {
    products: [],
}

interface UpdateYearlyTotalsPayload {
    id: string;
    yearlyTotals: YearlyTotals[];
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        // Acción para añadir un nuevo producto
        addProduct(state, action: PayloadAction<ProductDetails>) {
            state.products.push(action.payload);
        },
        // Acción para remover un producto por su índice
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        // Acción para actualizar un producto
        updateProduct(state, action: PayloadAction<ProductDetails>) {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        updateYearlyTotals: (state, action: PayloadAction<UpdateYearlyTotalsPayload>) => {
            const { id, yearlyTotals } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.products[productIndex].yearlyTotals = yearlyTotals;
            }
        },
        // Puedes agregar más acciones según necesites
    }
});

export const { addProduct, removeProduct, updateProduct, updateYearlyTotals } = calculatorSlice.actions;

export default calculatorSlice.reducer;
