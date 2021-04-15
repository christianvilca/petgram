const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

// la configuracion de webpack tiene que exportar un objeto
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/' // en donde buscar el app.bundle.js
  },
  mode: 'development',
  devtool: 'inline-source-map',
  // Plugins que vamos a utilizar y siempre va en array
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), // Asi utilizarmos la instacia del plugin
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [ // reglas que tendran los modulos
      {
        test: /\.js$/, // utilizar esta regla para todos los archivo de js
        exclude: /node_modules/, // No hacer estas transformaciones en las dependencias
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
