import jwt from 'jsonwebtoken'

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"10days"})
    res.cookie('jwt_Token', token, {
        httpOnly : true,
        magAge : 10 * 24 * 60 * 60 * 1000,
        secure : process.env.NODE_ENV === "development",
        sameSite : 'strict'
    })
    return token
}