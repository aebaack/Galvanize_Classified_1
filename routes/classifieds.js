
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((classifieds) => {
      res.json(classifieds);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .where('classifieds.id', req.params.id)
    .then((classified) => {
      res.json(classified[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
