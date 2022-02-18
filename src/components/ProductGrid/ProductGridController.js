import React from "react";
import { useSelector } from "react-redux";
import ProductGrid from "../ProductGrid/ProductGrid";

const ProductGridController = () => {
    const products = useSelector((state) => state.products);
    return <ProductGrid products={products} />;
};

export default ProductGridController;
