export default {
    home: '/',
    show: (showId) => `http://localhost:3000/api/show/${showId}`,
    shows: 'http://localhost:3000/api/shows',
    posters: 'https://image.tmdb.org/t/p/w300',
    showDetailsPage: (showId) => '/show/' + showId,
};