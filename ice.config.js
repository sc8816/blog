const path = require('path');
const jquery = require('jquery')

module.exports = {
    entry: 'src/index.tsx',
    publicPath: './',
    alias: {
        '@': path.resolve(__dirname, './src'),
    },
    plugins: [
        ['ice-plugin-moment-locales', {
            locales: ['zh-cn'],
        }]
    ],
};

