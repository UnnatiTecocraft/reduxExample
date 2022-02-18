import { all } from "redux-saga/effects";
import { waitForFetchProducts } from "./components/Product/ProductSaga";

export default function* rootSaga() {
    yield all([waitForFetchProducts()]);
}
