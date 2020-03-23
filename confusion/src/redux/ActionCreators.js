import * as ActionTypes from './ActionTypes'
import {dishes} from '../shared/shared-menu'

export const addComment = (dishId , rating , author , comment)=>({
    type : ActionTypes.ADD_COMMENTS,
    payload : {
        dishId : dishId,
        rating : rating,
        author :author,
        comment : comment
    }
});

export const addDish = (dishes)=>({
    type:ActionTypes.ADD_DISH,
    payload : dishes
})

export const dishLoading = ()=>({
    type:ActionTypes.DISH_LOADING
})

export const dishError = (errmsg)=>({
    type:ActionTypes.LOADING_ERR,
    payload : errmsg
})

export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishLoading(true));

    setTimeout(()=>{
        dispatch(addDish(dishes))
    } , 2000);
}