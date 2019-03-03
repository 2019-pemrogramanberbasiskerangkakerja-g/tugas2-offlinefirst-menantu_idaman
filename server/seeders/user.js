const user = require('../models').User;

module.exports = {
    seed() {
        user
            .create({
                username: 'arinanda',
                email: 'arinanda.adib@gmail.com',
                password: 'Popokbayi1.'
            }),
        user
            .create({
                username: 'ivan',
                email: 'ivanfadhb@gmail.com',
                password: 'Popokbayi1.'
            }),
        user
            .create({
                username: 'sidqi',
                email: 'sidqi@gmail.com',
                password: 'Popokbayi1.'
            })
    }
};