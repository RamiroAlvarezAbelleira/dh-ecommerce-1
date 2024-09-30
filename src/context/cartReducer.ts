export const initialState = {
    cartItems: []
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { id } = action.payload;

            const existingItem = state.cartItems.find((item) => item.id == id)

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        }

        case "REMOVE_FROM_CART": {
            const { id } = action.payload

            const existingItem = state.cartItems.find((item) => item.id == id)

            if (existingItem && existingItem.quantity > 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== id)
                }
            }
        }

        default: 
            return state;
    }
}