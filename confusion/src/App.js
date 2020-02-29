import React , {Component}from 'react';
import Main from "./component/MainComponent"
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import {BrowserRouter} from 'react-router-dom'
class App extends Component{
  

  render(){
    return(
      <BrowserRouter>
        <div className = "row">
            <Main/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
