import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'

export const protectRoute = async (req,res,next) => {
    const token = req.cookies['jwt_Token']
    if(!token){
        return res.status(401).json({msg:'Unauthorized - No token provided'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded){
        return res.status(401).json({msg:'Unauthorized - Invalid token'})
    }
    const user = await User.findById(decoded.userId).select('-password')
    if(!user){
        return res.status(401).json({msg:'Unauthorized - User not found'})
    }
    req.user = user
    next()
    
}