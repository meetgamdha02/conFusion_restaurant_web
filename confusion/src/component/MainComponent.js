import React , {Component}from 'react';
import '../App.css';
import Header from './Header'
import Footer from './Footer'
import Menu from "./menu"
import Contact from './contactComponent'
import DishDetails from "./dishDetails";
import AboutComponent from './AboutComponent'
import {actions} from 'react-redux-form'
import {Switch , Route , Redirect , withRouter} from 'react-router-dom'
import  {connect} from 'react-redux';
import Home from './HomeComponent'
import {postComments , fetchDishes , fetchCommet , fetchPromo} from '../redux/ActionCreators'
import Loader from './loader'

const mapStateToProps = (state)=>{
    return{
      dishes : state.dishes,
      leaders : state.leaders,
      comments : state.comments,
      promotions : state.promotions
    }
}

const mapDispatcherToProps = (dispatch)=>({
    postComment : (dishId , rating , author , comment)=>dispatch(postComments(dishId , rating , author , comment)),
    addDish : ()=>{dispatch(fetchDishes())},
    feedbackForms : ()=>{dispatch(actions.reset('feedback'))},
    commentServer : ()=>{dispatch(fetchCommet())},
    addPromo : ()=>{dispatch(fetchPromo())},
})
class Main extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.addDish();
    this.props.commentServer();
    this.props.addPromo();
  }
  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comment={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            isLoading = {this.props.dishes.isLoading}
            errmsg = {this.props.dishes.isError}
            postComment = {this.props.postComment} 
            isCommentFailed = {this.props.comments.isCommentFailed}/>
      );
    };
    const HomePage = ()=>{
      return(
        <Home dishes = {this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
              promotions = {this.props.promotions.promotions.filter((prom)=>prom.featured)[0]}
              leaders = {this.props.leaders.filter((leaders)=>leaders.featured)[0]}
              isLoading = {this.props.dishes.isLoading}
              errmsg = {this.props.dishes.isError}
              isPromoLoading = {this.props.promotions.isPromoLoading}
              isPromoFailed = {this.props.promotions.isPromoFailed}/>
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
                <Route exact path = "/contactus" component = {()=><Contact resetForm = {this.props.feedbackForms}/>}/>
                <Route path = "/aboutus" component = {About}/>
                <Redirect to="/home"></Redirect>
            </Switch>
          <Footer/>
        </div>
    )
  }
}
export default withRouter(connect(mapStateToProps ,mapDispatcherToProps)(Main));
