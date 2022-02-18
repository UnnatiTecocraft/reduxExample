import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartActions";
import ProductCard from "./ProductCard";

const ProductCardController = ({ product }) => {
    const dispatch = useDispatch();

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };
    return <ProductCard product={product} onAddToCart={onAddToCart} />;
};

export default ProductCardController;
