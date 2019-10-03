const Wreck = require('wreck');
const urls = require ('../constants/urls');
const paths = require('../constants/paths');

module.exports = [
    {
        method: 'GET',
        path: paths.shows,
        handler: async () => {
            const response = await Wreck.request('get', urls.shows);
            return await Wreck.read(response);
        }
    },
    {
        method: 'GET',
        path: paths.show,
        handler: async (request) => {
            const response = await Wreck.request('get', urls.show(request.params.showId));
            return await Wreck.read(response);
        }
    }
];