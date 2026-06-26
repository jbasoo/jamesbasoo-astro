// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jamesbasoo.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Atkinson Hyperlegible Next',
			cssVariable: '--font-atkinson',
			weights: ["100 900"],
			styles: ["normal", "italic"]
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Atkinson Hyperlegible Mono',
			cssVariable: '--font-atkinson-mono',
			weights: ["100 900"],
			styles: ["normal", "italic"]
		},
	],
});
