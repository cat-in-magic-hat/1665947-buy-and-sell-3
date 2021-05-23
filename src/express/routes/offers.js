'use strict';

const {Router} = require(`express`);
const { TEMPLATES_FOR_ROUTES } = require('./constants');
const { allOffers, myOffersList, categories } = require(`../data`);
const {showRequestPath} = require(`../handlers/route-handler`);
const newsRouter = new Router();

const ticketsPerPage = 8;
const paginationMaxAmount = 5;

newsRouter.get(`/add`, (req, res) => {
    res.render(TEMPLATES_FOR_ROUTES.ticketEdit, {
        title: 'Новая публикация',
        saveButtonText: 'Опубликовать',
        item: {},
        categories
    });
});

newsRouter.get(`/edit/:id`, (req, res) => {
    const id = +req.params.id;
    const item = myOffersList.find(x => x.id === id);
    if (item) {
        res.render(TEMPLATES_FOR_ROUTES.ticketEdit, {
            title: 'Редактировать публикацию',
            saveButtonText: 'Сохранить',
            item,
            categories
        });
    } else {
        res.render(TEMPLATES_FOR_ROUTES.notFound);
    }
});

newsRouter.get(`/category/:id`, (req, res) => {
    const id = +req.params.id;
    const category = categories.find(x => x.id === id);
    if (category) {
        const items = allOffers.filter(x => x.categoriesIds.includes(id));
        const pagesAmount = Math.ceil(items.length / ticketsPerPage);
        res.render(TEMPLATES_FOR_ROUTES.ticketsByCategory, {
            items,
            category,
            categories,
            currentPage: 0,
            pages: Math.min(pagesAmount, paginationMaxAmount),
            hasMore: pagesAmount > paginationMaxAmount
        });
    } else {
        res.render(TEMPLATES_FOR_ROUTES.notFound);
    }
});

newsRouter.get(`/:id`, (req, res) => {
    const id = +req.params.id;
    const item = allOffers.find(x => x.id === id);
    if (item) {
        res.render(TEMPLATES_FOR_ROUTES.ticket, {
            item,
            isPersonal: myOffersList.some(x => x.id === id)
        });
    } else {
        res.render(TEMPLATES_FOR_ROUTES.notFound);
    }
});

module.exports = newsRouter;
