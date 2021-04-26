'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {getRandomInt, shuffle} = require(`../../utils/random-utils`);
const {getDigitsCount} = require(`../../utils/numbers-utils`);
const {EXIT_CODES} = require(`../../constants`);
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;

const TITLES_INDEXES_RANGE = [0, 16];
const DESCRIPTION_PARTS_AMOUNT = [1, 5];

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`).map((x) => x.trim());
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generatePictureTitle = () => {
  const [minIndex, maxIndex] = TITLES_INDEXES_RANGE;
  const numberAsString = getRandomInt(minIndex, maxIndex).toString();
  const digitsAmount = getDigitsCount(maxIndex);
  return `item${numberAsString.padStart(digitsAmount, `0`)}.jpg`;
};

const getRandomItem = (items) => {
  return items[getRandomInt(0, items.length - 1)];
};

const buildDescription = (descriptions) => {
  const descriptionParts = getRandomInt(...DESCRIPTION_PARTS_AMOUNT);
  return shuffle(descriptions).slice(0, descriptionParts).join(` `);
};

const getRandomOfferType = () => {
  const offerTypes = Object.keys(OfferType);
  return OfferType[offerTypes[Math.floor(Math.random() * offerTypes.length)]];
};

const generateOffers = (count, titles, categories, sentences) => (
  [...Array(count)].map(() => ({
    title: getRandomItem(titles),
    picture: generatePictureTitle(),
    description: buildDescription(sentences),
    type: getRandomOfferType(),
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    category: getRandomItem(categories),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    if (countOffer > MAX_COUNT) {
      console.info(chalk.red(`Не больше ${MAX_COUNT} элементов.`));
      process.exit(EXIT_CODES.error);
    }
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Файл сгенерирован.`));
      process.exit(EXIT_CODES.success);
    } catch (err) {
      console.error(chalk.red(`Возникла ошибка при формировании файла...`));
      process.exit(EXIT_CODES.error);
    }
  }
};
