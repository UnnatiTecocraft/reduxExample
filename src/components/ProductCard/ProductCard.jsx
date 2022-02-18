import React from "react";
// prettier-ignore
import { Typography, Card, CardContent, CardActions, Button, Avatar} from "@mui/material";

const ProductCard = ({ product = null, onAddToCart = () => {} }) => {
    return (
        <Card className="card" style={{ height: 400 }}>
            <CardContent>
                <Avatar
                    alt={product.name}
                    src={"https://" + product.imageUrl}
                    title={product.name}
                    style={{
                        padding: 0,
                        height: 200,
                        margin: "auto",
                        width: 200,
                    }}
                />
                <Typography
                    gutterBottom
                    variant="h6"
                    component="p"
                    color="#d35400">
                    {product.name}
                </Typography>
                <Typography
                    style={{ fontWeight: 600, fontSize: 18 }}
                    color="#16a085"
                    component="p">
                    {product.price.current.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={onAddToCart}>
                    Add to Cart
                </Button>
                <Button
                    size="small"
                    color="secondary"
                    style={{ color: "#16a085", fontWeight: 600, fontSize: 14 }}>
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
