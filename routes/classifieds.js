
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

router.post('/', (req, res, next) => {
  const newClassified = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    item_image: req.body.item_image
  };

  let valuePresentForAllProperties = true;
  for (let prop in newClassified) {
    if (!newClassified[prop]) {
      valuePresentForAllProperties = false;
    }
  }

  if (valuePresentForAllProperties) {
    knex('classifieds')
      .insert(newClassified, ['id', 'title', 'description', 'price', 'item_image'])
      .then((classified) => {
        res.json(classified[0]);
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.sendStatus(500);
  }

});

module.exports = router;
