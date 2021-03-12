const handleErrors = (response) => {
	if (!response.ok) 
throw new Error(response.statusText)
	return response
}
const headers = new Headers()
headers.append('Content-Type', 'application/json')

export default (url: string) =>
	fetch(url, {
		headers: headers,
	})
		.then(handleErrors)
		.then((response) => response.json())
