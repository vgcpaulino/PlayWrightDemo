module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:playwright/recommended',
	],
	'overrides': [
		{
			'env': {'node': true},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {'sourceType': 'script'}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'@stylistic/ts',
	],
	'ignorePatterns': ['**/*.md'],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}
		],
		'object-curly-newline': ['error', {
			'ObjectExpression': {
				'multiline': true,
				'minProperties': 3
			},
			'ObjectPattern': {
				'multiline': true,
				'minProperties': 1
			},
			'ImportDeclaration': {
				'multiline': true,
				'minProperties': 3
			},
			'ExportDeclaration': {
				'multiline': true,
				'minProperties': 3
			}
		}],
		'object-property-newline': [
			'error',
			{allowAllPropertiesOnSameLine: false,},
		],
		'playwright/missing-playwright-await': [
			'error'
		],
		'function-paren-newline': [
			'error',
			'multiline-arguments',
			{ 'minItems': 2 }
		]
	}
};
