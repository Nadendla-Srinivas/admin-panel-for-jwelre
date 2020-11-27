import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute =({component:component, ...rest}) => {
    return <Route {...rest} component = {(props) =>{
    const token = window.localStorage.getItem('token');
    if(token){
       return <component{...props}/>

    }else{
       return <Redirect to={'/signin'}/>
    }
     } }/>
}

export default PrivateRoute;