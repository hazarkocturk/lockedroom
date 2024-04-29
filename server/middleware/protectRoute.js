// protectRoute.js
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(verified.userId);
            if (!user) {
                return res.status(401).json({ error: "Unauthorized - No user found" });
            }
            req.user = user;
            next();
        } catch (err) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;
