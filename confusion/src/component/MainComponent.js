import React , {Component}from 'react';
import '../App.css';
import {dishes} from "../shared/shared-menu"
import Header from './Header'
import Footer from './Footer'
import Menu from "./menu"
import DishDetails from "./dishDetails";
import {Switch , Route , Redirect} from 'react-router-dom'
import Home from './HomeComponent'

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes : dishes,
    }
  }

  render(){
    const HomePage = ()=>{
      return(
        <Home/>
      );
    }  
    return(
        <div>
          <Header/>
            <Switch>
                <Route path = "/home" component = {HomePage}/>
                <Route exact path = "/menu" component = {()=><Menu dishes = {this.state.dishes}/>}/>
                <Redirect to="/home"></Redirect>
            </Switch>
          <Footer/>
        </div>
    )
  }
}
export default Main;
