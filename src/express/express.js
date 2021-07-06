'use strict';

const express = require(`express`);
const path = require(`path`);
const {
  TEMPLATES_FOR_ROUTES,
  offersRoutes,
  personalRoutes,
  mainRoutes
} = require(`./routes`);

const DEFAULT_PORT = 8080;

const app = express();
const PUBLIC_DIR = `public`;
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(`/`, mainRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/my`, personalRoutes);

app.get(`*`, (req, res) => {
  res.status(404).render(TEMPLATES_FOR_ROUTES.notFound);
});

app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).render(TEMPLATES_FOR_ROUTES.serverError);
});

app.listen(DEFAULT_PORT);
