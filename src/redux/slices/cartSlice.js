import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils/constants"
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./cart-utils";

const INITIALSTATE = {
    hidden: true,
    cartItems: [],
    shippingCost: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIALSTATE,
    reducers: {
        // AGREGAR PRODUCTO
        addToCart: (state, action) => {
            return {
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        },
        // REMOVER PRODUCTO
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        },
        // VACIAR CARRITO
        clearCart: (state) => {
            return {
                ...state,
                shippingCost: 0,
                cartItems: []
            }
        },
        // MANEJADOR DEL CARRITO
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export const { addToCart, removeFromCart, clearCart, toggleHiddenCart } = cartSlice.actions
export default cartSlice.reducer