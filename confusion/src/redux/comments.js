
import * as ActionTypes from './ActionTypes'
export const comments = (state  = {
    comments : [],
    isCommentFailed : null
}, action)=>{
    switch(action.type){
        case ActionTypes.COMMENT_FAILED:
            return{
                ...state ,  isCommentFailed : action.payload , comments : []
            }

        case ActionTypes.COMMENT_SERVER:
            return{
                ...state , comments : action.payload , isCommentFailed : null
            }
        case ActionTypes.ADD_COMMENTS:
            var comment = action.payload;
            return {...state , comments : state.comments.concat(comment)}
        default:
            return state;
    }
}