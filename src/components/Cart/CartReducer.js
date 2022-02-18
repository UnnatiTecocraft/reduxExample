import cartInitialState from "./CartInitialState";
import {
    ADD_TO_CART,
    HIDE_PRODUCT_IN_CART,
    SHOW_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
} from "./CartTypes";

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case SHOW_PRODUCT_IN_CART:
            return { ...state, show_products: true };
        case HIDE_PRODUCT_IN_CART:
            return { ...state, show_products: false };
        case ADD_TO_CART:
            console.log(action.payload);
            return { ...state, products: [...state.products, action.payload] };
        case REMOVE_PRODUCT_FROM_CART: {
            const products = state.products.filter(
                (product) => product.id !== action.payload
            );
            return { ...state, products };
        }
        default:
            return state;
    }
};
export default cartReducer;
