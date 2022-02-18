import { call, put, takeEvery } from "redux-saga/effects";
import { ProductService } from "./ProductService";
import { FETCH_PRODUCTS } from "./ProductType";
import { setProducts } from "./ProductAction";

function* fetchProducts() {
    try {
        const products = yield call(ProductService.getAllProducts);

        yield put(setProducts(products));
    } catch (e) {
        console.log(e);
    }
}

export function* waitForFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
