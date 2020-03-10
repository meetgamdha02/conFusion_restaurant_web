import {leaders} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {promotions} from '../shared/promotions'
import {dishes} from "../shared/shared-menu"

export const intialState = {
    dishes : dishes,
    leaders : leaders,
    comments : COMMENTS,
    promotions : promotions
}

export const Reducer = (state = intialState , action )=>{
    return state;
}