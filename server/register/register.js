const users = require('../models').User;
const bcrypt = require('bcryptjs');

module.exports = {
    async register(req, res) {
        var data = req.body;
        let password_hash = await bcrypt.hash(data.password, 10);

        return users
            .create({
                username: data.username,
                email: data.email,
                password: password_hash
            })
            .then(user => {return res.status(200).send('Register Success')})
            .catch(error => console.log(error));
    }

};