const HtmlWebpackPlugin = require ('html-webpack-plugin')

// la configuracion de webpack tiene que exportar un objeto
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
	// Plugins que vamos a utilizar y siempre va en array
	plugins: [
		new HtmlWebpackPlugin() // Asi utilizarmos la instacia del plugin
	]
}
