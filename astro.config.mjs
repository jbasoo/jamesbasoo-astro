// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import netlify from '@astrojs/netlify';

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

    adapter: netlify(),

    vite: {
        resolve: {
            alias: {
                '@src': `${__dirname}/src`,
            },
        },
    },
});