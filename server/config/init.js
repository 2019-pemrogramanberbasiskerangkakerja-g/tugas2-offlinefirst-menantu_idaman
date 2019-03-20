const Pool = require('pg-pool')

// const pool = new Pool({
// 	user: 'pbkk',
// 	host: 'localhost',
// 	database: 'pbkk',
// 	password: 'nuzulcarrykita',
// 	port: 5432,
// })

module.exports.pool = new Pool({
	user: 'pbkk',
	host: 'localhost',
	database: 'pbkk',
	password: 'nuzulcarrykita',
	port: 5432,
})

// const poolRemote = new Pool({
// 	user: 'pbkk',
// 	host: '192.168.137.1',
// 	database: 'pbkk',
// 	password: 'nuzulcarrykita',
// 	port: 5432,
// })

module.exports.poolRemote = new Pool({
		user: 'pbkk',
		host: '192.168.137.1',
		database: 'pbkk',
		password: 'nuzulcarrykita',
		port: 5432,
	})