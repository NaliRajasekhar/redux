import { combineReducers, createStore, applyMiddleware} from "redux";
import laptopreducer from "./reducers/laptopReducer";
import mobilereducer from "./reducers/mobilereducer";
import userReducer from "./reducers/usersreducer";
import thunk from 'redux-thunk';
import logger from "redux-logger";


const rootreducer = combineReducers({
    laptops: laptopreducer,
    mobiles:mobilereducer,
    users:userReducer
})
const store = createStore(rootreducer, applyMiddleware(thunk, logger));
export default store;