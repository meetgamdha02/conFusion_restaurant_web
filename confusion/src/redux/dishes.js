import * as ActionTypes from './ActionTypes'

export const DISHES = (state  = {
    isLoading : true,
    dishes : [],
    isError : null
}, action)=>{
    switch(action.type){
        case ActionTypes.DISH_LOADING:
            return{
                ...state , isLoading : true , isError : null , dishes : []
            }
        case ActionTypes.LOADING_ERR:
            return{
                ...state , isLoading : false , isError : action.payload , dishes : []
            }

        case ActionTypes.ADD_DISH:
            return{
                ...state , isLoading : false , dishes : action.payload , isError : null
            }
        default:
            return state;
    }
}