const data = require('../data.json');

module.exports = type => {
  return (req, res, next, value) => {
    const typePlural = `${type}s`;
    const obj = data[typePlural].find(d => d.id === Number(value));

    if (obj) {
      req[type] = obj;
      next();
    } else {
      res.status(200).send(`Invalid ${type} ID`);
    }
  };
};
