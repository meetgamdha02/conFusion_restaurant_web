import React  from "react";
import {Card , CardImgOverlay , CardImg, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";


    
    function RenderMenuItem({dishes , onClick}){
        return(
            <Card>
                <Link to = {`/menu/${dishes.id}`}>
                    <CardImg src = {dishes.image} alt = {dishes.name}></CardImg>
                    <CardImgOverlay>
                        {dishes.name}
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }



    const Menu = (props)=>{
        const menu = props.dishes.map((dishes)=>{
            return(
                <div key = {dishes.id} className = "col-12 col-md-5 mt-2" >
                    <RenderMenuItem dishes = {dishes}/>
                </div>
            );
        });
        return(
            <div className = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to = '/menu'>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>Menu</h3>
                        <hr></hr>
                    </div>
                </div>
                    <div className = "row">
                    {menu}
                </div>
                
            </div>
            
        );
    }
    
export default Menu;
