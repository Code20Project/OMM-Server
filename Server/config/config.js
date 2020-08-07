module.exports = {
	// DB 연결 정보를 설정하는 객체
	test: { // local DB 연결 정보
			username: 'root',
			password: process.env.DATABASE_PASSWORD,
			database: '',
			host: 'localhost',
			port: 3306,
			dialect: 'mysql',
			logging: false,
	},
	development: { // 배포할 때 DATABASE 연결 정보
			username: 'root',
			password: process.env.DATABASE_PASSWORD,
			database: 'user',
			host: '14.50.138.127',
			port: 3306,
			dialect: 'mysql',
			logging: false,
	},
};
