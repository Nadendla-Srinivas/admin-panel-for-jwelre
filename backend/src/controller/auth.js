const User=require('../models/user');
const jwt = require ('jsonwebtoken');

exports.signup = (req, res)=>{
   
    User.findOne({email: req.body.email})
    .exec(( error, user) => {
      if(user) return res.status(400).json({
          message:'already registered'
      });
        const{
            firstName,
            lastName,
            email,
            password,
            
        }= req.body;
        const _user =new User({
          firstName,
          lastName,
          email,
          password,
          username:Math.random().toString(),
          role:'user'
         });
  
         _user.save((error, data) => {
             
             if(error){
                 return res.status(202).json({
                     message:'Something went wrong'
                 });
             }
             if(data){
                 return res.status(201).json({
                     message: 'user created Successfully...'
                 })
             }
         });
        });  
}
exports.signin = (req, res) => {
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({error});
        if(user){
            if(user.authenticate(req.body.password) && user.role==='user'){
              const token= jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
              const {_id,firstName,lastName,email,fullName}=user;
              res.status(200).json({
                  token,
                  user:{
                      _id,firstName,lastName,email,fullName
                  }
              });
            }else{
                return res.status(400).json({
                    message:'inavlid password'
                })
            }
         
        }else{
            return res.status(400).json({message:'something went wrong'});
        }
    });
}
