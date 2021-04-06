const HtmlWebpackPlugin = require('html-webpack-plugin')

// la configuracion de webpack tiene que exportar un objeto
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  // Plugins que vamos a utilizar y siempre va en array
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }) // Asi utilizarmos la instacia del plugin
  ],
  module: {
    rules: [ // reglas que tendran los modulos
      {
        test: /\.js$/, // utilizar esta regla para todos los archivo de js
        exclude: /node_modules/, // No hacer estas transformaciones en las dependencias
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
