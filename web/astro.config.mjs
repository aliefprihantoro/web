import { defineConfig } from 'astro/config'

const opts = import.meta.env.PROD
  ? {}
  : {
    publicDir: '../public/',
  }
// https://astro.build/config
export default defineConfig(opts)
