// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    
    components: [
        {
          path: '~/components',
          extensions: ['.vue'],
        }
      ],
      
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: 'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg' }]
        }
    },
})