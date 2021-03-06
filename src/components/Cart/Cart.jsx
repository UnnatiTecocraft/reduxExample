import React, { useRef } from "react";
//prettier-ignore
import { Button, Badge, Menu, MenuItem, ListItemSecondaryAction, IconButton, ListItemAvatar, Avatar, ListItemText,} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({
    onOpenCart,
    isCartOpen,
    onCloseCart,
    products,
    onRemoveProductFromCart,
}) => {
    const cartElemRef = useRef();

    return (
        <>
            <Button
                ref={cartElemRef}
                aria-controls="cart-menu"
                aria-haspopup="true"
                onClick={onOpenCart}
                color="inherit">
                <Badge
                    badgeContent={products.length}
                    sx={{
                        "& .MuiBadge-badge": {
                            color: "white",
                            backgroundColor: "#16a085",
                        },
                    }}>
                    <ShoppingCart />
                </Badge>
            </Button>
            {products.length > 0 ? (
                <Menu
                    id="cart-menu"
                    anchorEl={cartElemRef.current}
                    keepMounted
                    open={isCartOpen}
                    onClose={onCloseCart}>
                    {products.map((product) => (
                        <MenuItem key={product.id} style={{ width: "600px" }}>
                            <ListItemAvatar>
                                <Avatar
                                    variant="rounded"
                                    src={"https://" + product.imageUrl}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={product.name}
                                secondary={product.price.current.text}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() =>
                                        onRemoveProductFromCart(product.id)
                                    }>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </MenuItem>
                    ))}
                </Menu>
            ) : null}
        </>
    );
};

export default Cart;
