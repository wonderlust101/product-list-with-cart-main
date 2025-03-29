import {configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';
import cartReducer from '@/features/Cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;