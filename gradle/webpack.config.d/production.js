// All configs inside of this file will be enabled only in the production mode.
// The result webpack configurations file will be generated inside ../build/js/packages/<project-name>
// To check the outputs of this config, see ../build/distributions
if (config.mode === "production") {

    const HtmlWebpackPlugin = require("html-webpack-plugin"),
        UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin"),
        TerserWebpackPlugin = require("terser-webpack-plugin"),
        CopyWebpackPlugin = require("copy-webpack-plugin"),
        NodeJsonMinify = require("node-json-minify");

    // Where to output and how to name JS sources.
    // Using hashes for correct caching.
    // The index.html will be updated correspondingly to refer the compiled JS sources.
    config.output.filename = "js/[name].[contenthash].js";

    // Making sure optimization and minimizer configs exist, or accessing its properties can crash otherwise.
    config.optimization = config.optimization || {};
    const minimizer = config.optimization.minimizer = config.optimization.minimizer || [];

    // Minifying HTML.
    minimizer.push(new HtmlWebpackPlugin({
        template: "./kotlin/index.html",
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
        },
    }));

    // Minifying and obfuscating JS.
    minimizer.push(new UglifyJsWebpackPlugin({
        parallel: true,   // speeds up the compilation
        sourceMap: false, // help to match obfuscated functions with their origins, not needed for now
        uglifyOptions: {
            compress: {
                drop_console: true, // removing console calls
            }
        }
    }));

    // Additional JS minification.
    minimizer.push(new TerserWebpackPlugin({
        extractComments: true // excluding all comments (mostly licence-related ones) into a separate file
    }));

    // Minifying JSON locales.
    config.plugins.push(new CopyWebpackPlugin({
        patterns: [
            {
                context: "./kotlin",
                from: "./locales/**/*.json",
                to: "[path][name][ext]",
                transform: content => NodeJsonMinify(content.toString())
            }
        ]
    }));

}
