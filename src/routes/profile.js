const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const userModel = require('../models/User');

// GET USER PROFILE
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password -__v");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        res.status(200).json({
            message: "Profile fetched successfully",
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false
        });
    }
});

module.exports = router;