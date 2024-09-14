// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    alias: {
        css: "/<rootDir>/assets/css",
    },

    app: {
        baseURL: process.env.BASE_URL,
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com"},
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" }
            ]
        }
    },

    css: ["@/assets/css/main.css"],
})