const User = require('../model/user');

exports.getProfile = (req, res) => {
    res.status(200).json({
        email: req.user.email,
        username: req.user.username
    });
};
