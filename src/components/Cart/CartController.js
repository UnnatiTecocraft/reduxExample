import React, { Component } from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import {
    hideCartProducts,
    removeCartProducts,
    showCartProducts,
} from "./CartActions";

class CartController extends Component {
    render() {
        return (
            <Cart
                onOpenCart={this.props.openCart}
                isCartOpen={this.props.isCartOpen}
                onCloseCart={this.props.closeCart}
                products={this.props.products}
                onRemoveProductFromCart={this.props.removeProductFromCart}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isCartOpen: state.cart.show_products,
    products: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
    openCart: () => dispatch(showCartProducts()),
    closeCart: () => dispatch(hideCartProducts()),
    removeProductFromCart: (productId) =>
        dispatch(removeCartProducts(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartController);
