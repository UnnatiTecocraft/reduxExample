import {
    ADD_TO_CART,
    HIDE_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
    SHOW_PRODUCT_IN_CART,
} from "./CartTypes";

export const showCartProducts = () => ({
    type: SHOW_PRODUCT_IN_CART,
});

export const hideCartProducts = () => ({
    type: HIDE_PRODUCT_IN_CART,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeCartProducts = (productId) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
});
