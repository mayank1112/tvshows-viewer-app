const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const apiRoutes = require('./routes/apiRoutes');
const serverRoutes = require('./routes/serverRoutes');
const properties = require('./constants/properties');

const server = new Hapi.Server({
    port: properties.port,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'build')
        }
    }
});

const provision = async () => {
    await server.register(Inert);
    server.route([
            ...serverRoutes,
            ...apiRoutes,
    ]);
    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();