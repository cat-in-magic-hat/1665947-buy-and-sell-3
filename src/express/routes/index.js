'use strict';

const offersRoutes = require(`./offers`);
const personalRoutes = require(`./personal`);
const mainRoutes = require(`./main-routes`);
const {TEMPLATES_FOR_ROUTES} = require(`./constants`);

module.exports = {
  TEMPLATES_FOR_ROUTES,
  offersRoutes,
  personalRoutes,
  mainRoutes
};
