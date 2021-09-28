async function randomImage(searchTerms) {
	const axios = require('axios').default

	let pageNumber = Math.round(Math.random() * (50 - 1) + 1);
	pageNumber = pageNumber.toString();

	const options = {
		method: 'GET',
		url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
		params: {
			q: `${searchTerms}`,
			pageNumber: `${pageNumber}`,
			pageSize: '1',
			autoCorrect: 'true',
			safeSearch: 'false'
		},
		headers: {
			'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
			'x-rapidapi-key': '7d279316f4msha51a47ff9af8676p16f3b5jsnbca8797eefc7'
		}
	}
	try {
		const response = await axios.request(options)
		//console.log(response.data.value[0].url);
		return [response.data.value[0].url, pageNumber];
	} catch (error) {
		console.error(error)
	}
}
	// axios.request(options).then(async function (response) {
	// 	console.log(response.data.value[0].url);
	// 	return await response.data;
	// }).catch(function (error) {
	// 	console.error(error);
	// });

module.exports = { randomImage };
