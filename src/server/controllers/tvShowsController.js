const Wreck = require('wreck');
const urls = require ('../constants/urls');
const paths = require ('../constants/paths');

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
      const { mainHtmlFile } = paths;
      return response.file(`../../..${mainHtmlFile}`, { confine: false });
  },
  staticFiles: (request, response) => {
      const { folder, file } = request.params;
      const { staticFolder } = paths;
      return response.file(`../../..${staticFolder}/${folder}/${file}`, { confine: false });
  },
};