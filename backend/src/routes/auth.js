const express =require('express');
const { signup, signin} = require('../controller/auth');
//const { check } = require('express-validator');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../Validations/auth');
const router= express.Router();
//const User= require('../models/user');

router.post('/signup',validateSignupRequest,isRequestValidated, signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);

/*router.post('/profile', requireSignin, (req,res)=>{
    res.status(200).json({User:'profile'})
});*/
module.exports=router;
