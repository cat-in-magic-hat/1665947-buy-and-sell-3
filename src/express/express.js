'use strict';

const express = require(`express`);
const offersRoutes = require(`./routes/offers`);
const personalRoutes = require(`./routes/personal`);
const {showRequestPath} = require(`./handlers/route-handler`);

const DEFAULT_PORT = 8080;

const app = express();

app.get(`/`, showRequestPath);
app.get(`/register`, showRequestPath);
app.get(`/login`, showRequestPath);
app.get(`/search`, showRequestPath);

app.use(`/offers`, offersRoutes);
app.use(`/my`, personalRoutes);
app.use((req, res) => res.send(`Not found`));
app.listen(DEFAULT_PORT);
