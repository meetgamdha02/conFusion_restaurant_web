import * as ActionTypes from './ActionTypes'

import {baseUrl} from '../shared/baseUrls'

export const addComment = (comment)=>({
    type : ActionTypes.ADD_COMMENTS,
    payload : comment
});

export const postComments = (dishId , rating , author , comment)=> (dispatch)=>{
    var newComment = {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments' , {
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
            "Content-type" : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(responese=>{
        if(responese.ok){
            return responese;
        }
        else{
            var err = new Error(`Error ${responese.status} : ${responese.statusText}`)
            err.responese = responese;
            throw err;
        }
    },
    err =>{
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then(responese => responese.json())
    .then(responese => dispatch(addComment(responese)))
    .catch(error =>{
        console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
    
}
////
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

    fetch(baseUrl + 'dishes')
    .then(responese=>{
        if(responese.ok){
            return responese;
        }
        else{
            var err = new Error(`Error ${responese.status} : ${responese.statusText}`)
            err.responese = responese;
            throw err;
        }
    },
    err =>{
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then(responese => responese.json())
    .then(dishes => dispatch(addDish(dishes)))
    .catch(err=>dispatch(dishError(err)));
}
////

export const fetchCommet = ()=>(dispatch)=>{
    dispatch(dishLoading(true));

    fetch(baseUrl + 'comments')
    .then(responese=>{
        if(responese.ok){
            return responese;
        }
        else{
            var err = new Error(`Error ${responese.status} : ${responese.statusText}`)
            err.responese = responese;
            throw err;
        }
    },
    err =>{
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then(responese => responese.json())
    .then(comment => dispatch(serverCommet(comment)))
    .catch(err => dispatch(commentFailed(err)));
}

export const serverCommet = (comment)=>({
    type : ActionTypes.COMMENT_SERVER,
    payload : comment
})

export const commentFailed = ()=>({
    type : ActionTypes.COMMENT_FAILED
});
////

export const addPromo = (promos)=>({
    type:ActionTypes.ADD_PROMO,
    payload : promos
})

export const promoLoading = ()=>({
    type:ActionTypes.PROMO_LOADING
})

export const promoError = (errmsg)=>({
    type:ActionTypes.PROMO_FAILED,
    payload : errmsg
})

export const fetchPromo = ()=>(dispatch)=>{
    dispatch(promoLoading(true));

    fetch(baseUrl + 'promotions')
    .then(responese=>{
        if(responese.ok){
            return responese;
        }
        else{
            var err = new Error(`Error ${responese.status} : ${responese.statusText}`)
            err.responese = responese;
            throw err;
        }
    },
    err =>{
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then(responese => responese.json())
    .then(promos => dispatch(addPromo(promos)))
    .catch(err =>dispatch(promoError(err)));
}
