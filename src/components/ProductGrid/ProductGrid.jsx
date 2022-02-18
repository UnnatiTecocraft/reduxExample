import React from "react";
import Grid from "@mui/material/Grid";
import ProductCardController from "../../components/ProductCard/ProductCardController";

const renderGridTiles = (products = []) => {
    return products.map((product) => (
        <Grid item xs={4} key={product.id}>
            <ProductCardController product={product} />
        </Grid>
    ));
};

const ProductGrid = ({ products = [] }) => {
    return products.length > 0 ? (
        <Grid
            container
            item
            xs={10}
            style={{ margin: "auto", marginTop: "30px" }}>
            {renderGridTiles(products)}
        </Grid>
    ) : null;
};

export default ProductGrid;
