import React  from "react";
import {Card , CardImgOverlay , CardImg} from "reactstrap";

    
    function RenderMenuItem({dishes , onClick}){
        return(
            <Card onClick = {()=>{
                onClick(dishes.id)
            }}>
                <CardImg src = {dishes.image} alt = {dishes.name}></CardImg>
                <CardImgOverlay>
                    {dishes.name}
                </CardImgOverlay>
            </Card>
        );
    }



    const Menu = (props)=>{
        const menu = props.dishes.map((dishes)=>{
            return(
                <div key = {dishes.id} className = "col-12 col-md-5 mt-2" >
                    <RenderMenuItem dishes = {dishes} onClick = {props.onClick}/>
                </div>
            );
        });
        return(
            <div className = "container">
                    <div className = "row">
                    {menu}
                </div>
                
            </div>
            
        );
    }
    
export default Menu;
