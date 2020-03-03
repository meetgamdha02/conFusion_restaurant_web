import React , {Component}from 'react';
import '../App.css';
import {dishes} from "../shared/shared-menu"
import Header from './Header'
import Footer from './Footer'
import Menu from "./menu"
import Contact from './contactComponent'
import {leaders} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {promotions} from '../shared/promotions'
import DishDetails from "./dishDetails";
import {Switch , Route , Redirect} from 'react-router-dom'
import Home from './HomeComponent'

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes : dishes,
      leaders : leaders,
      comments : COMMENTS,
      promotions : promotions
    }
  }

  render(){
    const HomePage = ()=>{
      return(
        <Home dishes = {this.state.dishes.filter((dish)=>dish.featured)[0]} 
              promotions = {this.state.promotions.filter((prom)=>prom.featured)[0]}
              leaders = {this.state.leaders.filter((leaders)=>leaders.featured)[0]}/>
      );
    }  
    return(
        <div>
          <Header/>
            <Switch>
                <Route path = "/home" component = {HomePage}/>
                <Route exact path = "/menu" component = {()=><Menu dishes = {this.state.dishes}/>}/>
                <Route exact path = "/contactus" component = {Contact}/>
                <Redirect to="/home"></Redirect>
            </Switch>
          <Footer/>
        </div>
    )
  }
}
export default Main;
