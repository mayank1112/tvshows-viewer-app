const Hapi = require('@hapi/hapi');
const routes = require('./routes/api');
const properties = require('./constants/properties');

const init = async () => {
    const server = Hapi.server(properties);
    server.route(routes);
    await server.start();
};

init();