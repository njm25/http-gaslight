// opposite-day middleware: Inverts HTTP status codes for maximum confusion

function invertStatusCode(status) {
	if (status >= 200 && status < 300) return 500;
	if (status >= 300 && status < 400) return 400;
	if (status >= 400 && status < 500) return 302;
	if (status >= 500 && status < 600) return 200;
	return status;
}

function gaslight() {
	return function (req, res, next) {
		const originalStatus = res.status.bind(res);

		res.status = function (code) {
			const inverted = invertStatusCode(code);
			return originalStatus(inverted);
		};

		res.setHeader('X-Opposite-Day', 'true');
		next();
	};
}

module.exports = { gaslight };
