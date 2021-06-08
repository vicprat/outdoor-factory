require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Outdoor Factory`,
    description: `Somos una tienda de montaña con marcas 100% mexicanas`,
    author: `@vic_prat`,
  },
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\:200`,
          `Oswald\:300`,
          `Oswald\:400`,
          `Oswald\:700`,
          `Poppins\:200`,
          `Poppins\:300`,
          `Poppins\:400`,
          `Poppins\:700`,
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'outdoor-factory-mx',
        accessToken: '16a215758202e26d8306099cb548e6c1',
        apiVersion: '2020-07',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3a3a3a`,
        theme_color: `#3a3a3a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
