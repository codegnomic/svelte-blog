import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex'
import path from 'path'

const mdsvexConfig = {
	extensions: [".svx", '.md'],
  
	smartypants: {
	  dashes: "oldschool"
	},
  
	remarkPlugins: [],
	rehypePlugins: [],
	layout: './src/routes/blog/_post.svelte'
  }

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte',  '.svx', '.md'],

	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		alias: {
			'$comp': path.resolve('./src/lib/components')
		},
		adapter: adapter()
	},

};

export default config;
