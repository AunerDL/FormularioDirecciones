module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};