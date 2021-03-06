module.exports = {
  siteMetadata: {
    title: "Natesan Sivagnanam",
    titleTemplate: "%s · The Real Hero",
    description: "Portfolio of Natesan Sivagnanam",
    url: "https://www.natesan.netlify.com", // No trailing slash allowed!
    twitterUsername: "@NatesanSiv",
    siteUrl: "https://www.natesan.netlify.com",
    author: `@Natesan`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.natesan.netlify.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natesan's Portfolio`,
        short_name: `Natesan`,
        description: `Natesan's Personal Portfolio`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
        icon: "src/images/Natesan_Portfolio.jpeg",
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/experience`, `/skills`, `/contact`],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
  ],
}
