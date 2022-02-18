import { SET_PRODUCTS } from "./ProductType";

export const productsInitialState = [];

const ProductReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }
};

export default ProductReducer;
