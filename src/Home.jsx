import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ProductGridController from "./components/ProductGrid/ProductGridController";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./components/Product/ProductAction";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <Box>
            <ProductGridController />
        </Box>
    );
};

export default Home;
