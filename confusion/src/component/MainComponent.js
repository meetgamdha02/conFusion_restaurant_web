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
import AboutComponent from './AboutComponent'
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
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage = ()=>{
      return(
        <Home dishes = {this.state.dishes.filter((dish)=>dish.featured)[0]} 
              promotions = {this.state.promotions.filter((prom)=>prom.featured)[0]}
              leaders = {this.state.leaders.filter((leaders)=>leaders.featured)[0]}/>
      );
    } 
    
    const About =()=>{
      return(
        <AboutComponent leaders = {this.state.leaders}/>
      );
    }
    return(
        <div>
          <Header/>
            <Switch>
                <Route path = "/home" component = {HomePage}/>
                <Route exact path = "/menu" component = {()=><Menu dishes = {this.state.dishes}/>}/>
                <Route path = "/menu/:dishId" component = {DishWithId}/>
                <Route exact path = "/contactus" component = {Contact}/>
                <Route path = "/aboutus" component = {About}/>
                <Redirect to="/home"></Redirect>
            </Switch>
          <Footer/>
        </div>
    )
  }
}
export default Main;
