import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["vuetify/styles"],
  devtools: { enabled: true },
  build:{ transpile: ["vuetify"] },
  vite: { ssr: { noExternal: ["vuetify"] } },
  // sourcemap: { server: false, client: false },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@sidebase/nuxt-auth'
  ],
  auth: {
    provider: {
      type: 'authjs',
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  },
  // @ts-ignore
  // Here you can specify a custom font for the app
  googleFonts: {
    families: {
        Poppins: [100, 200, 300, 400 , 500, 600, 700, 800, 900],
    },
    download: false,
    useStylesheet: true
  }
})
