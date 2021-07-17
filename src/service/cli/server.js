'use strict';
const express = require(`express`);
const fs = require(`fs`).promises;
const {HTTP_CODE} = require(`../../constants`);

const DEFAULT_PORT = 3000;
const FILENAME = `mocks.json`;
const notFoundMessageText = `К сожалению, не найдено ни одного объявления`;

const configureRoutes = (app) => {
  app.get(`/offers`, async (req, res) => {
    try {
      const fileContent = await fs.readFile(FILENAME);
      const mocks = JSON.parse(fileContent);
      res.json(mocks);
    } catch (err) {
      res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send(err);
    }
  });

  app.use((req, res) => res
    .status(HTTP_CODE.NOT_FOUND)
    .send(notFoundMessageText));
};


module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    const app = express();
    app.use(express.json());
    configureRoutes(app);
    app.listen(port);
  }
};
