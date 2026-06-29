/* eslint-disable @typescript-eslint/no-require-imports */
// const { join } = require("node:path");

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-utopia')({ minWidth: 320, maxWidth: 1240 }),
		require('postcss-nesting'),
		require('postcss-custom-media'),
		require('postcss-easing-gradients')
	]
}