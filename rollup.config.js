/**
 * Rollup 설정 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:44:31
 */

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const pkg = require('./package.json');

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const config = [
	{
		external: [ /node_modules/ ],
		input: './src/index.ts',
		output: [
			{
				dir: './dist',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src'
			},
			{
				file: './dist/index.es.js',
				format: 'es'
			},
			{
				file: './dist/index.umd.js',
				format: 'umd',
				name: pkg.name
			}
		],
		plugins: [
			nodeResolve({ extensions }),
			babel({
				exclude: 'node_modules/**',
				extensions,
				include: [ 'src/**/*' ]
			}),
			commonjs({ include: 'node_modules/**' }),
			peerDepsExternal(),
			typescript({ tsconfig: './tsconfig-build.json' }),
			postcss({
				extract: false,
				inject: (cssVariableName) => `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`,
				modules: true,
				sourceMap: false,
				use: [ 'sass' ]
			})
		]
	}
];

export default config;