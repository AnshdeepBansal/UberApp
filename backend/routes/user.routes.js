const express = require('express');
const router = express.Router();
const {body} = require("express-validator"); 
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware')
router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("firstname has to be atleast 3 char long"),
    body('password').isLength({min:4}).withMessage('Password must be 4 char long')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:4}).withMessage('Password must be 4 char long')
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)


router.get('/logout' , authMiddleware.authUser , userController.logoutUser);
module.exports = router;