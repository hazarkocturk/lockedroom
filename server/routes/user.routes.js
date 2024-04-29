    import express from 'express';
    import protectRoute from '../middleware/protectRoute.js';
    import User from '../models/user.model.js';

    const router = express.Router();

    const getUsersForSidebar = async (req, res) => {
        try {
            const loggedInUserId = req.user._id;
            const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
            res.status(200).json({ users: filteredUsers });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    router.get('/', protectRoute, getUsersForSidebar)



    export default router;