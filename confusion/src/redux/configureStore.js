import { createStore  , combineReducers , applyMiddleware} from 'redux';
import {DISHES} from './dishes'
import {LEADERS} from './leader'
import {comments} from './comments'
import {PROMOTIONS} from './promotion'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes : DISHES,
            leaders : LEADERS,
            comments : comments,
            promotions : PROMOTIONS
        }),applyMiddleware(thunk , logger)
    );

    return store;
}