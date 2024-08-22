import { defineConfig } from 'astro/config';
import houstonTheme from './houston.json';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://crossscardev.github.io/',
  base: '/portfolio/',
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: houstonTheme
    }
  },
  integrations: [mdx()]
});
