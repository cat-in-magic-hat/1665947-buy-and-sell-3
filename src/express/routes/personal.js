'use strict';
const {Router} = require(`express`);
const { TEMPLATES_FOR_ROUTES } = require('./constants');
const { myOffersList, myOffersWithComments } = require(`../data`);

const personalRoutes = new Router();

personalRoutes.get(`/`, (req, res) => {
    res.render(TEMPLATES_FOR_ROUTES.myTickets, {
        ticketsList: myOffersList,
    });
});

personalRoutes.get(`/comments`, (req, res) => {
    res.render(TEMPLATES_FOR_ROUTES.myComments, {
        offersWithComments: myOffersWithComments
    });
});

module.exports = personalRoutes;
