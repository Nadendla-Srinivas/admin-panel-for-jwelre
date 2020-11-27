import React from 'react';
import Layout from '../../components/Layout';
import {Container, Form, Button, Row ,Col} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Signin from '../Signin';

/** 
 * @author
 * @function Signup
 **/

 const Signup = (props)=> {
     return(    
        <Container>
            <Row style={{marginTop:'100px'}}>
                <Col md={{span: 6,offset:7}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                            <Input
                              label="First Name"
                              placeholder="Firsr Name"
                              value=""
                              type="text"
                              onChange={()=>{}}
                            />
                            </Col>
                            <Col md={6}>
                             <Input
                              label="Last Name"
                              placeholder="Last Name"
                              value=""
                              type="text"
                              onChange={()=>{}}
                            />
                            </Col>
                        </Row>
                        <Form.Group >
                        <Input
                              label="Email"
                              placeholder="Email"
                              value=""
                              type="email"
                              onChange={()=>{}}
                            />
                        </Form.Group>

                        <Form.Group >
                        <Input
                              label="Password"
                              placeholder="Password"
                              value=""
                              type="email"
                              onChange={()=>{}}
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Row>
                            <Col>
                            <div>
                            <a href="Signin">Sign In</a>
                             to continue!
                           </div>
                           </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Container>
    
     )
 }
 export default Signup;