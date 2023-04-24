module.exports = {
	extends: [require.resolve('@rr/config/eslint/base.js')],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json'
	}
};