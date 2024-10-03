const path = require('path')
module.exports = {
    entry: './functions/src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    }
}