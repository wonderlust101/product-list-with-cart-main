import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, ProductData } from "@/types/types";

type CartSlice = {
    cart: CartItemType[];
    orderConfirmed: boolean;
    totalCost: number;
}

const initialState: CartSlice = {
    cart          : [],
    orderConfirmed: false,
    totalCost     : 0
};

const cartSlice = createSlice({
    name    : "cart",
    initialState,
    reducers: {
        newOrder(state) {
            state.orderConfirmed = false;
            state.cart = [];
        },
        orderConfirmedToggle(state) {
            state.orderConfirmed = !state.orderConfirmed;
        },
        addToCart(state, action: PayloadAction<ProductData>) {
            const exist = state.cart.find(product => product.name === action.payload.name);

            if (exist)
                exist.quantity++;
            else
                state.cart.push({...action.payload, quantity: 1});


            state.totalCost = state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter(item => item.name !== action.payload);
            state.totalCost = state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const item = state.cart.find(product => product.name === action.payload);
            if (item)
                item.quantity++;

            state.totalCost = state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.cart.find(product => product.name === action.payload);

            if (item) {
                item.quantity--;

                if (item.quantity < 1)
                    state.cart = state.cart.filter(item => item.name !== action.payload);
            }

            state.totalCost = state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        }
    }
});

export const {newOrder, orderConfirmedToggle, addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;