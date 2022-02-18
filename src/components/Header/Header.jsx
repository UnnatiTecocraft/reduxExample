import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography, IconButton } from "@mui/material";
import Cart from "../Cart/CartController";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#d35400" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Footware Mart
                    </Typography>
                    <Cart />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
