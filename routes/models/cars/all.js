const data = require('../../../data.json');

module.exports = (req, res) => {
  const modelId = Number(req.params.modelId);
  const cars = data.cars.filter(c => c.modelId === modelId);

  res.status(200).json({cars});
};
