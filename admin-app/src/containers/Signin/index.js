import React,{useEffect, useState} from 'react';
//import Layout from '../../components/Layout';
import { Container, Form, Button, Row ,Col} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import {login} from '../../actions'
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {isUserLoggedIn} from '../../actions';
import Signup from '../Signup';


const Signin = (props) => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [errors, setErrors]=useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
        
    },[]);
   const userLogin=(e)=>{
    
    e.preventDefault(); 

    const user={
    email,password
   }
   dispatch(login(user));
}
 if(auth.authenticate){
     return <Redirect to = { '/' } />

 }
    return (
            <Container>
                <Row style={{marginTop:'100px'}}>
                    <Col md={{span: 6,offset:7}}>
                        <Form onSubmit={userLogin}>
                       
                        <Input
                              label="Email"
                              placeholder="Email"
                              value={email}
                              type="email"
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                        
                        <Input
                              label="Password"
                              placeholder="Password"
                              value={password}
                              type="password"
                              onChange={(e)=>setPassword(e.target.value)}
                            />
                        
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        <div>
                            Don't have an Account?
                            <a href="Signup">Sign Up</a>
                           </div>
                        </Form>
                    </Col>
                </Row>

            </Container>
    )
}
export default Signin;