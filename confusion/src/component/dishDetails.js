import React , {Component } from "react";
import {CardText , CardBody , Card , CardImg} from "reactstrap"

export default class DishDetails extends Component{
    constructor(props){
        super(props);
    }

    renderComments(comment){
        
        const comt = comment.map((comment)=>{
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return(
            <Card>
                <CardBody>
                    {comt}
                </CardBody>
            </Card>
        )
    }
    renderDish(dishes){
        if(dishes!=null){
            return(
                <Card>
                    <CardImg src = {dishes.image} alt = {dishes.name}></CardImg>
                    <CardBody>
            <CardText>{dishes.name}</CardText>
            <p>{dishes.description}</p>
                    </CardBody>
                </Card>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    render(){
        const dish = this.props.dish;
        if(dish == null)
        return(
            <div></div>
        )
        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-md-5 mt-2">
                        {this.renderDish(dish)}
                    </div>
                    <div className = "col-12 col-md-5 mt-2">
                        {this.renderComments(dish.comments )}
                    </div>
                </div>
            </div>
        )
    }
}