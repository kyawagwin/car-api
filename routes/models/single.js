module.exports = (req, res) => {
  const model = req.model;

  res.status(200).json({model});
};

/*
const data = require('../../data.json');

module.exports = (req, res) => {
  const modelId = Number(req.params.modelId);
  const model = data.models.find(m => m.id === modelId);

  res.status(200).json({model});
};
*/
