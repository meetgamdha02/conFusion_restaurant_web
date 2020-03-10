import React  , { Component}from 'react';
import {Breadcrumb , BreadcrumbItem , Form , Button , FormGroup , Label, Input ,Col , FormFeedback} from "reactstrap"
import {Link} from "react-router-dom"
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            telnum : '',
            email : '',
            agree : false,
            contacType : 'Tel.',
            feedback : '',
            touched :{
                firstName : false,
                lastName : false,
                telnum : false,
                email : false
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleError = this.handleError.bind(this)
    }

    onInputChange(event){
        var target = event.target;
        var value = target.type === 'checkbox'? target.checked : target.value;
        var name = target.name;

        this.setState({
            [name] : value
        })
    }

    onSubmitClick(event){
        alert(JSON.stringify(event));
        event.preventDefault();
    }

    handleBlur = (field) => (event)=>{
        this.setState({
            touched : {... this.state.touched , [field] : true}
        });
    }

    handleError = (firstName , lastName , telnum , email)=>{
        const errors = {
            firstName : '',
            lastName : '',
            telnum : '',
            email : ''
        }

        if(this.state.touched.firstName && firstName.length <= 3 )
        errors.firstName = "First Name should Be greater than 3"
        else if(this.state.touched.firstName && firstName.length >=12)
        errors.firstName = "First Name should be less than 12"

        if(this.state.touched.lastName && lastName.length <= 3 )
        errors.lastName = "last Name should Be greater than 3"
        else if(this.state.touched.lastName && lastName.length >=12)
        errors.lastName = "last Name should be less than 12"   
        
        const reg = /^\d{10}$/;
        if(this.state.touched.telnum && !reg.test(telnum))
        errors.telnum = "Enter valid telephone number";
        if(this.state.touched.email && email.split('').filter(x=> x === '@').length!=1)
        errors.email = "Enter valid Email address"

        return errors;
    }
    render(){

        const errors = this.handleError(this.state.firstName , this.state.lastName , this.state.telnum , this.state.email);
        return(
        
            <div className="container">
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
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className = "row row-content">
                    <div className = "col-12">
                        <h3>Send us Feedback</h3>
                    </div>
                    <div className = "col-12 col-md-9">
                        <Form onSubmit = {this.onSubmitClick}>
                            <FormGroup row>
                                <Label htmlFor = "firstName" md = {2}>First Name</Label>
                                <Col md = {10}>
                                    <Input type = "text" id = "firstName" name = "firstName" placeholder = "Enter Your name here" value = {this.state.firstName} onChange = {this.onInputChange} onBlur = {this.handleBlur('firstName')}
                                     valid={errors.firstName === ''}
                                     invalid={errors.firstName !== ''}></Input>
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor = "lastName" md = {2}>Last Name</Label>
                                <Col md = {10}>
                                    <Input type = "text" id = "lastName" name = "lastName" placeholder = "Enter Your last here" value = {this.state.lastName} onChange = {this.onInputChange} onBlur = {this.handleBlur('lastName')}
                                     valid={errors.lastName === ''}
                                     invalid={errors.lastName !== ''}></Input>
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor = "telnum" md = {2}>Telephone No</Label>
                                <Col md = {10}>
                                    <Input type = "tel" id = "telnum" name = "telnum" placeholder = "Enter Your Telephone No here" value = {this.state.telnum} onChange = {this.onInputChange} onBlur = {this.handleBlur('telnum')}
                                     valid={errors.telnum === ''}
                                     invalid={errors.telnum !== ''}></Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor = "email" md = {2}>Email</Label>
                                <Col md = {10}>
                                    <Input type = "email" id = "email" name = "email" placeholder = "Enter Your Email here" value = {this.state.email} onChange = {this.onInputChange} onBlur = {this.handleBlur('email')}
                                     valid={errors.email === ''}
                                     invalid={errors.email !== ''}></Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md = {{size : 6 , offset : 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type = "checkbox" name = "agree" checked = {this.state.agree} onChange = {this.onInputChange}></Input>
                                            {' '}
                                            <strong>May We contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md = {{size : 3 , offset : 1}}>
                                    <Input type = "select" name = "contactType" value = {this.state.contacType} onChange = {this.onInputChange}>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor = "feedback" md = {2}>Feedback</Label>
                                <Col md = {10}>
                                    <Input type = "textarea" id = "feedback" name = "feedback" placeholder = "Enter Your Feedback here" row = "12 " value = {this.state.message} onChange = {this.onInputChange}></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md = {{size : 10 , offset : 2}}>
                                    <Button type = "submit" color = "primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
   
}
