import React , {Component} from "react";
import {Card , CardImgOverlay , CardImg} from "reactstrap";
import DishDetails from "./dishDetails";
export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectDish : null
        }
    }
    selDish(dishes){
        this.setState({
            selectDish : dishes
        })
    }
    render(){
        const menu = this.props.dishes.map((dishes)=>{
            return(
                <div id = {dishes.id} className = "col-12 col-md-5 mt-2" >
                <Card onClick = {()=>this.selDish(dishes)}>
                    <CardImg src = {dishes.image} alt = {dishes.name}></CardImg>
                    <CardImgOverlay>
                        {dishes.name}
                    </CardImgOverlay>
                </Card>
            </div>
            );
        });
        return(
            <div className = "container">
                 <div className = "row">
                    {menu}
                </div>
                <div className = "row">
                    <DishDetails dish = {this.state.selectDish}/>
                </div>
            </div>
           
        );
    }
}