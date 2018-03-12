const express = require('express');

const Bear = require('./bearmodels.js');

const bearsRouter = express.Router();

bearsRouter.post('/api/bears', (req, res) => {
  const bearInfo = req.body;

  const bear = new Bear(bearInfo);

  bear
    .save()
    .then(savedBear => {
      res.status(201).json(savedBear);
    })
    .catch(err => {
      res.status(500).json({ msg: 'Error creating bear.', error: err });
    });
});

bearsRouter.get('/api/bears', function(req, res) {
  Bear.find()
    .then(res => {
      res.status(200).json(res)
    })
    .catch(err => {
      res.status(500).json({ msg: 'Error getting bears', error: err });
    });
});

module.exports = bearsRouter;