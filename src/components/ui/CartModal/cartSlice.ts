import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../../interface";

export interface CartState {
    cartItems: CartProduct[]
}

export const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<CartProduct>) => {
            const { id } = action.payload;

            const existingItem = state.cartItems.find((item) => item.id == id)

            if (existingItem) {
                state = {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            } else {
                state = {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        },
        removeFromCart: (state: CartState, action: PayloadAction<CartProduct>) => {
            const { id } = action.payload

            const existingItem = state.cartItems.find((item) => item.id == id)

            if (existingItem && existingItem.quantity > 1) {
                state = {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
                }
            } else {
                state = {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== id)
                }
            }
        },
        clearCart: (state: CartState) => {
            state = {
                ...state,
                cartItems: []
            }
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer