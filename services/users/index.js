const User = require('../../models/user');
const {generateToken} = require('../../utilities/jwt_token')


async function signup(req,res,next){
    const {email, password} = req.body;
    
    // find user if already exists
     const foundUser = await User.findOne({ email });
    if (foundUser) { 
        return res.status(403).json({ error: 'Email is already in use'});
    }
    const newUser = new User({email, password});
    
    //save user
    await newUser.save();
    console.log("before generating")
    const token = generateToken(newUser);
    //send jwt token
    res.send({ token });
}

async function login(req, res, next){
    const {email, password} = req.body;
    //const newUser = await User({email, password});
    const token = generateToken(req.user);
    res.send({token})
}


module.exports = {
     signup,
     login
}