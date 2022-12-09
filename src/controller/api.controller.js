const response = require('express').response;
const petition = require('../api/isapiConnection');

const apiController = async (req, res = response) => {
  try {
    let data;
    if (req.method == 'GET') {
      data = await petition({
        url: req._parsedUrl.path,
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      data = await petition({
        url: req._parsedUrl.path,
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: req.body,
      });
    }
    res.status(200).json(data);
  } catch (error) {
    return res.json({
      error: 'Algo ocurrio',
    });
  }
};
// TODO: refactorizar

module.exports = apiController;