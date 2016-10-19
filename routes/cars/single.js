module.exports = (req, res) => {
  const car = req.car;

  res.status(200).json({car});
};

/*
const data = require('../../data.json');

module.exports = (req, res) => {
  const carId = Number(req.params.carId);
  const car = data.cars.find(c => c.id === carId);

  res.status(200).json({car});
};
*/
