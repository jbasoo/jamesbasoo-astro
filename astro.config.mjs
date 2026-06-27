// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import netlify from '@astrojs/netlify';
import { writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** @type {import('astro').AstroIntegration} */
const preloadHeaders = {
    name: 'preload-headers',
    hooks: {
        'astro:build:done': ({ dir }) => {
            const astroDir = fileURLToPath(new URL('_astro/', dir));
            const files = readdirSync(astroDir);
            const cssFiles = files.filter(f => f.endsWith('.css')).map(f => `/_astro/${f}`);
            if (!cssFiles.length) return;
            const links = cssFiles.map(f => `  Link: <${f}>; rel=preload; as=style`).join('\n');
            writeFileSync(fileURLToPath(new URL('_headers', dir)), `/*\n${links}\n`);
        },
    },
};

// https://astro.build/config
export default defineConfig({
    site: 'https://jamesbasoo.com',
    integrations: [mdx(), sitemap(), preloadHeaders],

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
                "@": new URL('./', import.meta.url).pathname,
                "@src": new URL('./src', import.meta.url).pathname,
            },
        },
    },
});