const paths = require('../constants/paths');
const tvShowsController = require('../controllers/tvShow');

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
        path: paths.staticCss,
        handler: tvShowsController.staticCss,
    },
    {
        method: 'GET',
        path: paths.staticJs,
        handler: tvShowsController.staticJs,
    },
];