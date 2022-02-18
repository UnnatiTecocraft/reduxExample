import { combineReducers } from "redux";
import cartReducer from "./components/Cart/CartReducer";
import productReducer from "./components/Product/ProductReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
});

export default rootReducer;
