const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');

const findObject = require('../../utils/findObject');

models.param('modelId', findObject('model'));

/*
const data = require('../../data.json');

models.param('modelId', (req, res, next, value) => {
  const model = data.models.find(m => m.id === Number(value));

  if (model) {
    req.model = model;
    next();
  } else {
    res.status(404).send('Invalid model ID');
  }
});
*/

models.use('/:modelId/cars', cars);

models.get('/', all);
models.get('/:modelId', single);

module.exports = models;
