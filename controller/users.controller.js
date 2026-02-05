const { readFile, writeFile } = require('../utils/fileSystems.js')

const GET = (req, res) => {
	const data = readFile('./users.json')

	res.json({
		data,
	})
}

const GET_BY_ID = (req, res) => {
	const id = req.params.id
	const datas = readFile('./users.json')

	const user = datas.find((el) => el.id == id)
	if (!user) return res.json('User not found')
	return res.json({
		message: 'Success',
		data: user,
	})
}

const POST = (req, res) => {
	const body = req.body
	const data = readFile('./users.json')

	if (!(body?.name && body?.age)) {
		return res.json({
			xabar: 'Body required',
		})
	}

	const newData = {
		id: data.length ? data[data.length - 1].id + 1 : 1,
		name: body.name,
		age: body.age,
	}

	data.push(newData)
	writeFile('./users.json', data)
	res.json({
		message: 'Success',
		data: newData,
	})
}

const UPDATE = (req, res) => {
	const body = req.body
	const id = req.params.id
	const datas = readFile('./users.json')

	let user = datas.find((el) => el.id == id)
	if (!user) return res.json('User not found')
	user.name = body?.name ? body.name : user.name
	user.age = body?.age ? body.age : user.age
	writeFile('./users.json', datas)
	return res.json({
		message: 'Success',
		data: user,
	})
}

const DELETE = (req, res) => {
	const id = req.params.id
	const datas = readFile('./users.json')

	const users = datas.filter((el) => el.id != id)

	writeFile('./users.json', datas)

	return res.json({
		message: 'Success',
		data: users,
	})
}

module.exports = {
	GET,
	GET_BY_ID,
	POST,
	UPDATE,
	DELETE,
}
