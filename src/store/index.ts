import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { cartSlice } from "../components/ui/CartModal/cartSlice";

export const store = configureStore({
    reducer: {
        cartSlice: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type IRootState = ReturnType<typeof store.getState>