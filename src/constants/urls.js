export default {
    show: (showId) => `http://localhost:8443/api/show/${showId}`,
    shows: 'http://localhost:8443/api/shows',
    posters: 'https://image.tmdb.org/t/p/w300',
    showDetailsPage: (showId) => '/show/' + showId,
};