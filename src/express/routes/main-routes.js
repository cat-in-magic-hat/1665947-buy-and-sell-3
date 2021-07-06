'use strict';

const {Router} = require(`express`);
const {TEMPLATES_FOR_ROUTES} = require(`./constants`);
const {newOffers, discussedOffers, categories, searchOffersResult} = require(`../data`);
const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.main, {
    categories,
    newOffers: {
      title: `Самое свежее`,
      hiddenTitle: `Самые новые предложения`,
      items: newOffers,
      moreItemsAmount: null
    },
    discussedOffers: {
      title: `Самые обсуждаемые`,
      hiddenTitle: `Самые обсуждаемые предложения`,
      items: discussedOffers,
      moreItemsAmount: null
    }
  });
});

mainRouter.get(`/register`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.register);
});

mainRouter.get(`/login`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.login);
});

mainRouter.get(`/search`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.search, {
    newOffers: {
      title: `Самое свежее`,
      hiddenTitle: `Самые новые предложения`,
      items: newOffers,
      moreItemsAmount: 25
    },
    searchResult: searchOffersResult
  });
});


module.exports = mainRouter;
