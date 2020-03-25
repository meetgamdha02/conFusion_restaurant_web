
import * as  ActionTypes from './ActionTypes'
export const PROMOTIONS = (state  = {
    promotions : [] , 
    isPromoLoading : true,
    isPromoFailed : null
}, action)=>{
    switch(action.type){
        case ActionTypes.PROMO_LOADING:
            return{
                ...state , isPromoLoading : true , isPromoFailed : null , promotions : []
            }
        case ActionTypes.PROMO_FAILED:
            return{
                ...state , isPromoLoading : false , isPromoFailed : action.payload , promotions : []
            }

        case ActionTypes.ADD_PROMO:
            return{
                ...state , isPromoLoading : false , promotions : action.payload , isPromoFailed : null
            }
        default:
            return state;
    }
}