async function pingFunction(hostname) {
	let ping = require('ping');

	let res = await ping.promise.probe(hostname);
	return res.time;

}

module.exports = { pingFunction };
