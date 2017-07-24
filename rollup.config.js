export default {
	entry: './src/index.js',
	targets: [
		{
			dest: './dist/index.js',
			format: 'es'
		},
		{
			dest: './dist/index.cjs.js',
			format: 'cjs'
		}
	]
};
