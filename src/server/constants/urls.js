module.exports = {
    show: (showId) => `https://api.themoviedb.org/3/movie/${showId}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`,
    shows: "https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
};