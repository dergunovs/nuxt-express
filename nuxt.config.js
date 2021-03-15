module.exports = {
  server: {
    port: process.env.PORT,
    host: "localhost",
  },

  env: {
    baseUrl: process.env.BASE_URL,
  },

  head: {
    htmlAttrs: { lang: "ru" },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#000000" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  },

  telemetry: false,
  loading: false,
  loadingIndicator: false,
  components: true,
  router: { prefetchLinks: false },

  modules: ["@nuxtjs/axios"],

  css: ["@/assets/css/main.css"],

  axios: { proxy: true },
  proxy: { "/api/": process.env.BASE_URL },

  build: {
    extractCSS: true,
    devMiddleware: { headers: { "Cache-Control": "no-store", Vary: "*" } },
    corejs: 3,
  },
};
