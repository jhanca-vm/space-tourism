import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

export default defineConfig({
  server: { host: true },
  integrations: [tailwind(), svelte()]
})
