import React  from 'react';
import {Card , CardImgOverlay , CardImg, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";
import Loader from './loader'
import {baseUrl} from '../shared/baseUrls'
    
    function RenderMenuItem({dishes }){
        return(
            <Card>
                <Link to = {`/menu/${dishes.id}`}>
                    <CardImg src = { baseUrl+ dishes.image} alt = {dishes.name}></CardImg>
                    <CardImgOverlay>
                        {dishes.name}
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }



    const Menu = (props)=>{
        const menu = props.dishes.dishes.map((dishes)=>{
            return(
                <div key = {dishes.id} className = "col-12 col-md-5 mt-2" >
                    <RenderMenuItem dishes = {dishes}/>
                </div>
            );
        });
        if(props.dishes.isLoading){
            return(
                <div className = "container">
                    <div className = "row">
                        <Loader/>
                    </div>
                </div>
            )
        }
        else if(props.dishes.isError){
            return(
                <div className = "container">
                    <div className = "row">
            <h4>{props.dishes.isError}</h4>
                    </div>
                </div>
            )
        }
        else
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
