import { ProductDetails } from "@/financial_products/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Asumiendo que tienes definida tu interfaz ProductDetails como antes la mostraste

interface CalculatorState {
    products: ProductDetails[];
}

const initialState: CalculatorState = {
    products: [],
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
        // Puedes agregar más acciones según necesites
    }
});

export const { addProduct, removeProduct, updateProduct } = calculatorSlice.actions;

export default calculatorSlice.reducer;
