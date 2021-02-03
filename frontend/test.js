const teste = function* () {
	let numero = 0

	while (numero < 10) yield ++numero

	return 98
}

const generator = teste()

console.log(generator.next())
console.log(generator.next())

setInterval(() => console.log(generator.next()), 1000)

await Api.fetchUser('user_id')
