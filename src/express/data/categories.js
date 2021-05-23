const categories = [
    {
        id: 1,
        order: 10,
        title: 'Дом',
        quantity: 81,
    },
    {
        id: 4,
        order: 20,
        title: 'Электроника',
        quantity: 62,
    },
    {
        id: 5,
        order: 30,
        title: 'Одежда',
        quantity: 106,
    },
    {        
        id: 2,
        order: 40,
        title: 'Спорт/отдых',
        quantity: 86,
    },
    {        
        id: 3,
        order: 50,
        title: 'Авто',
        quantity: 34,
    },
    {
        id: 6,
        order: 60,
        title: 'Книги',
        quantity: 92,
    }
];

categories.forEach((item, idx) => {
    item.id = idx + 1;
    const imgId = item.id === 1 ? '' : item.id.toString().padStart(2, '0');
    item.image = `/img/cat${imgId}.jpg`;
    item.alterbativeImage = `/img/cat${imgId}@2x.jpg 2x`;
})

module.exports = {
    categories
}