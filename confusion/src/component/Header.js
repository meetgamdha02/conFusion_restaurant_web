import React , {Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron ,Nav , NavbarToggler , Collapse,NavItem ,
        Modal , ModalBody , ModalHeader , Form , FormFeedback , FormGroup , Label , Input, Button} from "reactstrap";
import {NavLink} from 'react-router-dom'
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModelOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    toggleModel = ()=>{
        this.setState({
            isModelOpen : !this.state.isModelOpen
        })
    }

    handleLogin = (event)=>{
        const errors = {
            username : '',
            password : ''
        }
        this.toggleModel();
        if(this.username.value === ''){
            errors.username = "User name can't be empty"
        }
        if(this.password.value === ''){
            errors.password = "Password can't be empty"
        }
        
        event.preventDefault();
        return errors;    
    }



    render(){
        return(
            <React.Fragment>
            <Navbar dark expand = "md"> 
              <div className="container">
                  <NavbarToggler onClick = {this.toggleNav}/>
                  <NavbarBrand className = "mr-auto " href="/">
                      <img src = "assets/images/logo.png" alt = "Restro De Confusion" height = "30" width = "40"></img>
                  </NavbarBrand>

                  <Collapse isOpen = {this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                        <NavLink className = "nav-link" to = "/home">
                            <span className = "fa fa-home fa-lg"></span>Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className = "nav-link" to = "/aboutus">
                            <span className = "fa fa-info fa-lg"></span>Aboutus
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className = "nav-link" to = "/menu">
                            <span className = "fa fa-list fa-lg"></span>Menu
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className = "nav-link" to = "/contactus">
                            <span className = "fa fa-address-card fa-lg"></span>Contact Us
                        </NavLink>
                    </NavItem>
                  </Nav>

                  <Nav className = "ml-auto" navbar>
                        <NavItem>
                            <Button onClick = {this.toggleModel} color = "primary">
                                <span className = "fa fa-sign-in fa-lg">

                                </span>
                                Log In
                            </Button>
                        </NavItem>
                  </Nav>
                  </Collapse>
              </div>
            
            </Navbar>
            
            <Jumbotron>
                 <div className="container">
                     <div className="row row-header">
                         <div className="col-12 col-sm-6">
                             <h1>Ristorante con Fusion</h1>
                             <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                         </div>
                     </div>
                 </div>
             </Jumbotron>

             <Modal isOpen = {this.state.isModelOpen} toggle = {this.toggleModel}>
                 <ModalHeader toggle = {this.toggleModel}>
                     Log In
                 </ModalHeader>
                 <ModalBody>
                    <Form onSubmit = {this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor = "username">UserName</Label>
                            <Input type = "text" id = "username" name = "username" innerRef = {input => this.username  = input} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor = "password">Password</Label>
                            <Input type = "password" id = "password" name = "password" innerRef = {input => this.password  = input} ></Input>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type = "checkbox" name = "remember"></Input>
                                Remember Me
                            </Label>
                        </FormGroup>

                        <Button type = "submit" value = "submit" color = "primary">Log In</Button>
                    </Form>
                 </ModalBody>

             </Modal>
          </React.Fragment>
        )
    }
}