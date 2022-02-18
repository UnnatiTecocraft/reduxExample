import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

/* const store = createStore(
    rootReducer,
    compose(
        //applyMiddleware(ReduxThunk),
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
); */

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(rootSaga);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
