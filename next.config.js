const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  env: {
    secret: process.env.SECRET,
  }
})