const jwt = require('jsonwebtoken');
const User = require('../model/user');
const dotenv = require('dotenv');

dotenv.config();

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user || user.password !== password) {
                return res.status(403).json({ message: 'Invalid credentials' });
            }

            const payload = { id: user._id };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ accessToken: token });
        })
        .catch(err => res.status(500).json({ message: 'Server error' }));
};
