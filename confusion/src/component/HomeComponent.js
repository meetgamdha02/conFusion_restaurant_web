import React , {Component} from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src = {item.image}></CardImg>
            <CardBody>
    <CardTitle>{item.name}</CardTitle>
    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
    <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}
function Home(props){
    return(
        <div className = "container">
            <div className = "row align-ilems-start">
                <div className = "col-12 col-md mt-1">
                    <RenderCard item = {props.dishes}/>
                </div>
                <div className = "col-12 col-md mt-1">
                    <RenderCard item = {props.promotions}/>
                </div>
                <div className = "col-12 col-md mt-1">
                    <RenderCard item = {props.leaders}/>
                </div>
            </div>
        </div>
    )
}
export default Home;