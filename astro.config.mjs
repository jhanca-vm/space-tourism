import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

export default defineConfig({
  redirects: {
    '/destination': '/destination/moon'
  },
  server: { host: true },
  integrations: [tailwind(), svelte()]
})
