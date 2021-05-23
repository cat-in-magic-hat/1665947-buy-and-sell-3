'use strict';

const express = require(`express`);
const path = require(`path`);
const {
  TEMPLATES_FOR_ROUTES,
  offersRoutes,
  personalRoutes
} = require(`./routes`);

const { newOffers, discussedOffers, categories, searchOffersResult } = require(`./data`);

const DEFAULT_PORT = 8080;

const app = express();
const PUBLIC_DIR = `public`;
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.main, {
    categories,
    newOffers: {
      title: 'Самое свежее',
      hiddenTitle: 'Самые новые предложения',
      items: newOffers,
      moreItemsAmount: null
    },
    discussedOffers: {
      title: 'Самые обсуждаемые',
      hiddenTitle: 'Самые обсуждаемые предложения',
      items: discussedOffers,
      moreItemsAmount: null
    }
  });
});

app.get(`/register`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.register);
});

app.get(`/login`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.login);
});

app.get(`/search`, (req, res) => {
  res.render(TEMPLATES_FOR_ROUTES.search, {
    newOffers: {
      title: 'Самое свежее',
      hiddenTitle: 'Самые новые предложения',
      items: newOffers,
      moreItemsAmount: 25
    },
    searchResult: searchOffersResult
  }); 
});

app.use(`/offers`, offersRoutes);
app.use(`/my`, personalRoutes);

app.get('*', (req, res) => {
  res.status(404).render(TEMPLATES_FOR_ROUTES.notFound);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render(TEMPLATES_FOR_ROUTES.serverError);
});

app.listen(DEFAULT_PORT);
