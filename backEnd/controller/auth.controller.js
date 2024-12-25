import {User } from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import {generateToken} from '../utils/generateToken.js'

export const signup = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "Please fill in all fields."});
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email address."});
        }
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({message: "Email already exists."});
        }
        if(password.length <6){
            return res.status(400).json({message: "Password must be at least 6 characters"})
        }
        const newUser = new User({
            name, email, password : await bcryptjs.hashSync(password, 10)
        })

        generateToken(newUser._id, res)

        await newUser.save()
        res.json({message: "User created successfully.", newUser})

    } catch (error) {
        res.status(400).json({success: false, message:"INternal server error"})
        console.log(`Error in signup controller : ${error.message}`)
    }
}
export const logout = async (req,res) => {
    try {
        res.clearCookie('jwt_Token')
        res.json({message: "Logged out successfully."})
    } catch (error) {
        console.log(`Error in logout controller : ${error.message}`)
        res.status(400).json({message : "Internal server error"})
    }
}
export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please fill in all fields."});
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Email does not exist."});
        }
        const passwordCheck = await bcryptjs.compare(password, user.password)
        if(!passwordCheck){
            return res.status(400).json({success:false, message:"Invalid credentials"})
        }
        generateToken(user._id, res)

        res.status(200).json({message:"Login successfully", user})
    } catch (error) {
        console.log(`Error in login controller : ${error.message}`)
        res.status(400).json({success:false, message:"Internal server error"})
    }
}