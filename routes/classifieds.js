
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

module.exports = router;
