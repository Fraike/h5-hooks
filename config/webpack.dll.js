const path = require('path')
const wepack = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-dom', 'axios']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '[name]'
  },
  plugins: [
    //映射
    new wepack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ]
}
