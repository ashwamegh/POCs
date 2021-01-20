class UsersService {

	static getAllUsers(db){
		return db
			.select("*")
			.from("users")
			.then(rows => rows);
	}

	static insertUser(db, newUser) {
		return db
		.insert(newUser)
		.into("users")
		.returning("*")
		.then(rows => {
			return rows[0];
		});
	}

	static getById(db, uid) {
		return db
		.select("*")
		.from("users")
		.where({ id: uid })
		.then(rows => rows[0])
	}

	static updateUser(db, uid, newData) {
		return db
		.table("users")
		.where({ id: uid })
		.update(newData)
		.then(rows => rows[0])
	}

	static deleteUser(db, uid) {
		return db
		.table("users")
		.where({ id: uid })
		.del()
		.then(rows => rows)
	}
}

module.exports = UsersService