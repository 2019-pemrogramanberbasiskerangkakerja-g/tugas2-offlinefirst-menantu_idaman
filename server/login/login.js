const users = require('../models').User;
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');

module.exports = {
    async login(req, res) {
        var data = req.body;
        var user = data.username;
        var password = data.password;

        users
            .findOne({
                where: {username: user}
            })
            .then(async result => {
                const matches = await bcrypt.compare(password, result.password);
                if (!result) {
                    return res.status(400).send('User not found'); 
                } else if(matches) {
                    return res.status(200).send('Logged in'); 
                }
                else {
                    return res.status(400).send('Auth failed. Wrong password.'); 
                }
            });
    },
};