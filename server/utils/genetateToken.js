import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
        console.log("Generated token:", token); 
        res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "None", 
            secure: true
        });
    } catch (error) {
        console.error(error);
    }
}

export default generateTokenAndSetCookie; 
