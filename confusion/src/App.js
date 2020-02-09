import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {dishes} from "./shared/shared-menu"
import Menu from "./component/menu"
import {Navbar,NavbarBrand } from "reactstrap";
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes : dishes
    }
  }

  render(){
    return(
      <div className = "container">
        <div className = "row">
          <Navbar  color = "light">
            <NavbarBrand href = "/">Restro De Confusion</NavbarBrand>
          </Navbar>
        </div>
        <div className = "row">
         
            <Menu dishes = {this.state.dishes}/>
            
        </div>
      </div>
    )
  }
}
export default App;
