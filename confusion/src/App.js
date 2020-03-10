import React , {Component}from 'react';
import Main from "./component/MainComponent"
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {configureStore} from './redux/configureStore'

const store = configureStore();

class App extends Component{
  

  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>  
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
