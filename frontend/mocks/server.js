const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const heartthrobRoutes = require('heartthrob-fundamentals/mocks/routes')
const middleware = require('heartthrob-fundamentals/mocks/middleware')
const app = express()

app.options('*', cors())
app.use(middleware)

console.log('\n')
heartthrobRoutes.concat(routes).forEach(element => {
	app.get(element.url, function (req, res) {
		res.send(element.data)
	})
	console.log('Mocked: GET ' + element.url)
})
console.log('\n')

app.listen(5000)