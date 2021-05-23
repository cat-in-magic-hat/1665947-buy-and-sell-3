const { categories } = require('./categories');
const { comments } = require('./comments');

const offers = [
    {
        action: 'buy',
        categoriesIds: [1],
        title: 'Монстера',
        price: 1000,
        description: 'Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...'
    },
    {
        action: 'sell',
        categoriesIds: [1],
        title: 'Мое старое кресло',
        price: 4000,
        description: 'Продам свое старое кресло, чтобы сидеть и читать книги зимними...'
    },
    {
        action: 'sell',
        categoriesIds: [4, 1],
        title: 'Дедушкины часы',
        price: 45000,
        description: 'Продаю дедушкины часы в прекрасном состоянии, ходят до...'
    },
    {
        action: 'buy',
        categoriesIds: [1],
        title: 'Кофеварка',
        price: 2000,
        description: 'Куплю вот такую итальянскую кофеварку, можно любой фирмы...'
    },
    {
        action: 'sell',
        categoriesIds: [3, 4],
        title: 'Ленд Ровер',
        price: 900000,
        description: 'Запарил Лэндровер'
    },
    {
        action: 'sell',
        categoriesIds: [4],
        title: 'Ableton',
        price: 88000,
        description: ''
    },
    {
        action: 'sell',
        categoriesIds: [2],
        title: 'Доска',
        price: 55000,
        description: ''
    },
    {
        action: 'buy',
        categoriesIds: [4],
        title: 'Фотик Canon',
        price: 32000,
        description: ''
    },
    {
        id: 16,
        action: 'sell',
        categoriesIds: [3],
        title: 'Хонда',
        price: 100000
    },
]

offers.forEach((item, idx) => {
    if(!item.id) item.id = idx + 1;
    const imgId = item.id.toString().padStart(2, '0');
    item.image = `/img/item${imgId}.jpg`;
    item.alterbativeImage = `/img/item${imgId}@2x.jpg 2x`;
    item.label = item.action == 'sell' ? 'Продам' : 'Куплю';
    item.categories = item.categoriesIds.map(x => categories.find(c => c.id === x));
})

const discussedOffers = [...offers.slice(0, 4)];
const myOffersWithComments = [
    offers[4],
    offers[5],
].map(offer => ({
    offer,
    comments
}));

const myOffersList = [
    offers[5],
    offers[1],
    offers[3],
    offers[7],
    offers[0]
];

const searchOffersResult = [
    offers[4],
    offers[8],
];

module.exports = {
    newOffers: offers.slice(0, 8),
    allOffers: offers,
    discussedOffers,
    myOffersWithComments,
    myOffersList,
    searchOffersResult
};