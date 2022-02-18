//import { ProductService } from "../../services/ProductService";
import { FETCH_PRODUCTS, SET_PRODUCTS } from "./ProductType";

export const fetchProducts = () => {
    //Code for redux-thunk
    /* return async (dispatch) => {
        const products = await ProductService.getAllProducts();
        dispatch(setProducts(products));
    }; */

    //Code for redux-saga
    return { type: FETCH_PRODUCTS };
};

export const setProducts = (products = null) => {
    if (products) {
        return {
            type: SET_PRODUCTS,
            payload: products,
        };
    }
};
