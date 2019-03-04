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
                if (!result) {
                    return res.status(400).send('User not found'); 
                } else if(result) {
                    if(password == result.password)
                    {
                        jwtLogin.sign(req, res, user, 'topsecret', 1, false); 
                        // return res.status(400).send('Auth success.');   
                    }
                    else {
                        return res.status(400).send('Auth failed. Wrong password.'); 
                    }
                    // const matches = await bcrypt.compare(password, result.password);
                    // console.log('====================================');
                    // console.log(result.password);
                    // console.log('====================================');
                    // console.log('====================================');
                    // console.log(password);
                    // console.log('====================================');
                    // console.log('====================================');
                    // console.log(matches);
                    // console.log('====================================');
                    // if (!matches) {
                    //     return res.status(400).send('Auth failed. Wrong password.');   
                    // } else {
                    //     jwtLogin.sign(req, res, user, 'topsecret', 1, false); 
                    //     return res.status(400).send('Auth success.');  
                    // }
                }
            });
    },
};