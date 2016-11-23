let webpack = require('webpack');

module.exports = {
    // Where to start processing our code
    // Inputs
    entry    : [
        // script! is to package the scripts to webpack
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    // Provide a set of key-value pairs where the key is the module name
    // and the value is the variable name we want available inside of our
    // external script files
    externals: {
        // Let foundation properly attach its methods onto the jQuery object
        jquery: 'jQuery'
    },
    // Provide a shortcut
    // Which variable names to look for (like $ for jQuery) and if it finds them
    // and there is no other variable declared then tell webpack to go ahead and
    // require the variable and name it that variable
    plugins  : [
        // The key is the variable name to watch for and the value is the module
        // to replace it with
        new webpack.ProvidePlugin({
            '$'     : 'jquery',
            'jQuery': 'jquery'
        })
    ],
    // Specify where to dump the bundled file
    // Output
    output   : {
        // Path to the folder
        // NodeJS exclusive __dirname: path to the current folder
        path    : __dirname,
        filename: './public/bundle.js'
    },
    resolve  : {
        root      : __dirname,
        // Pick names for our components
        // Tell webpack where to find that component
        alias     : {
            Main             : 'app/components/Main.jsx',
            Navigation       : 'app/components/Navigation.jsx',
            Timer            : 'app/components/Timer.jsx',
            Countdown        : 'app/components/Countdown.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        // List of file extensions that we want to process
        extensions: ['', '.js', '.jsx'],
    },
    // Add the loader into the modules
    module   : {
        loaders: [
            // Convert jsx files into es5 code that we can use today
            {
                // The module
                loader : 'babel-loader',
                // Take the files and parse them through react, get the output then run them through es2015
                query  : {
                    // stage-0 enables es6 features
                    presets: ['react', 'es2015', 'stage-0']
                },
                // Tell which files to parse
                test   : /\.jsx?$/,
                // Tell which folders we don't want to have parsed
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // Create source map which are very important debugging tools
    // cheap-module-eval-source-map not working
    // devtool: 'cheap-module-eval-source-map'
    devtool  : 'inline-source-map'
    // or
    // devtool: 'eval-source-map'

};
