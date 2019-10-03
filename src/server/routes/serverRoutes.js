module.exports = [
    {
        method: 'GET',
        path: '/',
        handler(request, response) {
            return response.file("../../../build/index.html", { confine: false });
        }
    },
    {
        method: 'GET',
        path: '/show/{showId}',
        handler(request, response) {
            return response.file("../../../build/index.html", { confine: false });
        }
    },
    {
        method: 'GET',
        path: '/static/js/{file}',
        handler(request, response) {
            return response.file("../../../build/static/js/" + request.params.file, { confine: false });
        }
    },
    {
        method: 'GET',
        path: '/static/css/{file}',
        handler(request, response) {
            return response.file("../../../build/static/css/" + request.params.file, { confine: false });
        }
    }
];