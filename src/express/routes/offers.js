'use strict';

const {Router} = require(`express`);
const {showRequestPath} = require(`../handlers/route-handler`);
const newsRouter = new Router();


newsRouter.get(`/add`, showRequestPath);
newsRouter.get(`/edit/:id`, showRequestPath);
newsRouter.get(`/category/:id`, showRequestPath);
newsRouter.get(`/:id`, showRequestPath);

module.exports = newsRouter;
