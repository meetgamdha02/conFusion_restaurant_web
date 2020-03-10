import React , {Component}from 'react';
import '../App.css';
import Header from './Header'
import Footer from './Footer'
import Menu from "./menu"
import Contact from './contactComponent'
import DishDetails from "./dishDetails";
import AboutComponent from './AboutComponent'
import {Switch , Route , Redirect , withRouter} from 'react-router-dom'
import  {connect} from 'react-redux';
import Home from './HomeComponent'


const mapStateToProps = (state)=>{
    return{
      dishes : state.dishes,
      leaders : state.leaders,
      comments : state.comments,
      promotions : state.promotions
    }
}
class Main extends Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage = ()=>{
      return(
        <Home dishes = {this.props.dishes.filter((dish)=>dish.featured)[0]} 
              promotions = {this.props.promotions.filter((prom)=>prom.featured)[0]}
              leaders = {this.props.leaders.filter((leaders)=>leaders.featured)[0]}/>
      );
    } 
    
    const About =()=>{
      return(
        <AboutComponent leaders = {this.props.leaders}/>
      );
    }
    return(
        <div>
          <Header/>
            <Switch>
                <Route path = "/home" component = {HomePage}/>
                <Route exact path = "/menu" component = {()=><Menu dishes = {this.props.dishes}/>}/>
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
export default withRouter(connect(mapStateToProps)(Main));
