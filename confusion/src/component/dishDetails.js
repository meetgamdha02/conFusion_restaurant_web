import React from "react";
import {CardText , CardBody , Card , CardImg , CardTitle} from "reactstrap"
import {Breadcrumb , BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom"
    function RenderComments({comment}){
        
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
                <CardTitle><b>Comments</b></CardTitle>
                <CardBody>
                    {comt}
                </CardBody>
            </Card>
        )
    }
    function RenderDish({dishes}){
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
    


    const DishDetails = (props)=>{
        const dish = props.dish;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }
        return(
            <div className = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to = '/menu'>Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>{dish.name}</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-12 col-md-5 mt-1">
                       <RenderDish dishes = {dish}></RenderDish>
                    </div>
                    <div className = "col-12 col-md-5 mt-1">
                        <RenderComments comment = {props.comment}></RenderComments>
                    </div>
                </div>
            </div>
        )
    }
        
    
export default DishDetails;