module.exports = {
  // parser: require('postcss-scss'),
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')()
  ]
}
