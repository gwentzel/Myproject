var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/frontend/public/scripts',
        filename: 'show.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
