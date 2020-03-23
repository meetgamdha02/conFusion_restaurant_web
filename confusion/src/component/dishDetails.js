import React , {Component} from "react";
import {CardText , CardBody , Card , CardImg , CardTitle, Button, Modal, ModalHeader, ModalBody, Row, Label , Col} from "reactstrap"
import {Breadcrumb , BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom"
import {LocalForm , Control , Errors} from 'react-redux-form'
import  Loader from './loader'

const required = (val)=>val && val.length;
const minLength = (len) => (val) => !val || val.length>=len;
const maxLength = (len) => (val) => !val || val.length<=len
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal = ()=>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
    handleSubmit=(val)=>{
        this.props.addComment(this.props.dishId , val.rating , val.name , val.comment)
    }
    render(){
        return(
            <div className = "container">
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader toggle = {this.toggleModal}>
                        Add Comments
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit = {this.handleSubmit}>
                        <Row className = "form-group">
                            <Label htmlFor= "rating" md = {12}>Rating</Label>
                            <Col md = {12}>
                                <Control.select model = ".rating" id = "rating" name = "rating" className = "form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className = "form-group">
                            <Label htmlFor = "name" md = {12}>Your Name</Label>
                            <Col md = {12}>
                                <Control.text model = ".name" id = "name" name = "name" className = "form-control"
                                validators = {
                                    {
                                        required , minLength : minLength(3) , maxLength : maxLength(10)
                                    }
                                }
                                />
                            <Errors 
                            className = "text-danger"
                            show = "touched"
                            model = ".name"
                            messages = {
                                {
                                    required : 'Required',
                                    minLength : 'Min Length should be 3',
                                    maxLength : 'Max length should be 10'
                                }
                            }
                            />
                                
                            </Col>
                        </Row>

                        <Row className = "form-group">
                            <Label htmlFor = "comment" md = {12}>Comment</Label>
                            <Col md = {12}>
                                <Control.textarea model = ".comment" rows = "8" id = "comment" name = "comment" className = "form-control"
                                validators = {
                                    {
                                        required
                                    }
                                }
                                />
                            <Errors 
                            className = "text-danger"
                            show = "touched"
                            model = ".comment"
                            messages = {
                                {
                                    required : 'Required'
                                }
                            }
                            />
                             <Col md = {{size : 10 }}>
                                    <Button type = "submit" color = "primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
                </Modal>
                <Button className = "fa fa-edit" color = "primary" onClick = {this.toggleModal}>Add Comments</Button>
            </div>
        )
    }
}

    
    function RenderComments({comment , addComment , dishId}){
        
        const comt = comment.map((comment)=>{
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
               
            )
        })
        return(
            <Card>
                <CardTitle><b>Comments</b></CardTitle>
                <CardBody>
                    {comt}
                    <CommentForm dishId = {dishId} addComment = {addComment}/>
                </CardBody>
                
            </Card>
        )
    }
    function RenderDish({dishes }){
         if(dishes!=null){
            return(
                <Card>
                    <CardImg src = {dishes.image} alt = {dishes.name}></CardImg>
                    <CardBody>
                 <CardText>{dishes.name}</CardText>
            <p>{dishes.description}</p>
                    </CardBody>
                </Card>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    


    const DishDetails = (props)=>{
        const dish = props.dish;
        if(props.isLoading){
            return(
                <div className = "continer">
                    <div className = "row">
                        <Loader/>
                    </div>
                </div>
            )
        }
        else if(props.errmsg){
            return(
                <div className = "container">
                    <div className = "row">
            <h4>{props.errmsg}</h4>
                    </div>
                </div>
            )
        }
        else if(dish == null)
        {
            return(
                <div></div>
            )
        }
        else
        return(
            <div className = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to = '/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>{dish.name}</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-12 col-md-5 mt-1">
                       <RenderDish dishes = {dish} ></RenderDish>
                    </div>
                    <div className = "col-12 col-md-5 mt-1">
                        <RenderComments comment = {props.comment}
                        addComment = {props.addComment}
                        dishId = {props.dish.id}></RenderComments>
                    </div>
                </div>
                
            </div>
        )
    }
    
export default DishDetails;