'use strict';

const getFullRoute = (request) => {
  const {baseUrl, route: {path: routePath}} = request;
  if (routePath === `/`) {
    return baseUrl === `` ? `/` : baseUrl;
  }
  return `${baseUrl}${routePath}`;
};

module.exports = {
  showRequestPath: (req, res) => {
    return res.send(`Requested route: '${getFullRoute(req)}'`);
  },
};
