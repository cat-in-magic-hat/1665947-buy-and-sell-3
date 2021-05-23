const offersRoutes = require(`./offers`);
const personalRoutes = require(`./personal`);
const {TEMPLATES_FOR_ROUTES} = require(`./constants`);

module.exports = {
    TEMPLATES_FOR_ROUTES,
    offersRoutes,
    personalRoutes
}