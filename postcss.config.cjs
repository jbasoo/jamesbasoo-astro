/* eslint-disable @typescript-eslint/no-require-imports */
// const { join } = require("node:path");

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-nesting'),
		require('postcss-custom-media'),
		require('postcss-easing-gradients')
	]
}