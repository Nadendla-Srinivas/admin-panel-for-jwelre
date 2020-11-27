const express =require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../Validations/auth');
const router= express.Router();
const User= require('../../models/user');
router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

module.exports=router;
