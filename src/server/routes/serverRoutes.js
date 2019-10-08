const paths = require('../constants/paths');
const tvShowsController = require('../controllers/tvShowsController');

module.exports = [
    {
        method: 'GET',
        path: paths.home,
        handler: tvShowsController.home,
    },
    {
        method: 'GET',
        path: paths.showDetails,
        handler: tvShowsController.home,
    },
    {
        method: 'GET',
        path: paths.staticFiles,
        handler: tvShowsController.staticFiles,
    },
];