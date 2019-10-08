const paths = require('../constants/paths');
const tvShowsController = require('../controllers/tvShowsController');

module.exports = [
    {
        method: 'GET',
        path: paths.shows,
        handler: tvShowsController.getTvShows,
    },
    {
        method: 'GET',
        path: paths.show,
        handler: tvShowsController.getTvShow,
    }
];