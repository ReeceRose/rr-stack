module.exports = {
  root: true,
  extends: [require.resolve('@rr/config/eslint/web.js')],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json'
	},
};
