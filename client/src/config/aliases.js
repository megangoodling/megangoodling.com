const path = require('path')

module.exports = {
  assets: path.resolve(__dirname, '../src/assets'),
  atoms: path.resolve(__dirname, '../src/components/atoms'),
  components: path.resolve(__dirname, '../src/components'),
  molecules: path.resolve(__dirname, '../src/components/molecules'),
  organisms: path.resolve(__dirname, '../src/components/organisms'),
  pages: path.resolve(__dirname, '../src/pages'),
  subpages: path.resolve(__dirname, '../src/pages/subpages'),
  styles: path.resolve(__dirname, '../src/styles')
}
