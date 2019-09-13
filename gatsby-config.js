const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Alex Pereira`,
    description: 'Software Engineer',
    keywords: 'software, engineer, software-engineer, software-engineer, react, gatsby, javascript, portfolio, alex, pereira, alex pereira, alex-pereira, alexpereira.dev, http, https'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        fonts: path.join(__dirname, 'src/fonts'),
        img: path.join(__dirname, 'src/img'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147226021-1',
      },
    },
  ],
}
