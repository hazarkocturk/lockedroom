import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/genetateToken.js';


const router = express.Router();

router.post('/signup', async(req, res) => {
    try{
        const{fullName, username, email, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error: "Password do not match"});
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            email,
            password : hashedPassword,
            gender,
            profilePic: gender ==="male"? boyProfilePic: girlProfilePic
        })
        if(newUser){
        generateTokenAndSetCookie(newUser._id, res);   
        await newUser.save();
        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic

        });}else{
            res.status(400).json({error: "Invalid user data"});
        }

    }catch(error){
        console.error(error);
    }
})

router.get('/login', async (req, res) => {
    res.status(200).json({message: "Login success"});

})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const validPassword = await bcrypt.compare(password, user?.password|| "");
        if (!user || !validPassword) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        generateTokenAndSetCookie(user._id, res);
        console.log(user._id, user.username);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/logout', async (req, res) => {
   try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logout success"});
   }catch(error){
       console.error(error);
       res.status(500).json({ error: "Internal server error" })}
})






export default router;