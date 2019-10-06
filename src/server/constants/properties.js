const Path = require('path');
const paths = require('./paths');

module.exports = {
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, `..${paths.buildFolder}`),
        },
        cors: true,
    }
};