// @ts-nocheck

import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"

// import from vuetify/locale to specify vuetify language
// Example for Spanish language:
// import { es } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
      ssr: true,
      //Use your custom vuetify themes:
      theme: {
        defaultTheme: "dark",
        themes: {
          customDark: {
            dark: true,
            colors: {
              background: "#444654",
              surface: "#14161c",
              primary: "#3f51b5",
              secondary: "#03dac6",
              error: "#f44336",
              info: "#2196F3",
              success: "#4caf50",
              warning: "#fb8c00",
            },
          },
        },
      },
      // Example for Spanish language
      /*
      locale: {
          locale: 'es',
          messages: { es },
      },
      */
      Icons: {
          defaultSet: "mdi",
          aliases,
          sets: {
            mdi,
            // fa,
          },
      },
  })

  nuxtApp.vueApp.use(vuetify)
})