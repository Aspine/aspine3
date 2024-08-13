import * as tailwindcss from 'prettier-plugin-tailwindcss';

const config = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',
	requirePragma: false,
	insertPragma: false,
	proseWrap: 'always',
	plugins: [tailwindcss],
	tailwindConfig: './tailwind.config.mjs'
};

export default config;
