const Wreck = require('wreck');
const urls = require ('../constants/urls');

module.exports = {
  getTvShows: async () => {
      const response = await Wreck.request('get', urls.shows);
      return await Wreck.read(response);
  },
  getTvShow: async (request) => {
        const response = await Wreck.request('get', urls.show(request.params.showId));
        return await Wreck.read(response);
  },
  home: (request, response) => {
    return response.file("../../../build/index.html", { confine: false });
  },
  staticJs: (request, response) => {
    return response.file("../../../build/static/js/" + request.params.file, { confine: false });
  },
  staticCss: (request, response) => {
      return response.file("../../../build/static/css/" + request.params.file, { confine: false });
  },
};