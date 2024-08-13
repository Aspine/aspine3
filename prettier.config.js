import * as tailwindcss from 'prettier-plugin-tailwindcss';
import * as prettierPluginAstro from 'prettier-plugin-astro';

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
	plugins: [tailwindcss, prettierPluginAstro],
	tailwindConfig: './tailwind.config.mjs',
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};

export default config;
