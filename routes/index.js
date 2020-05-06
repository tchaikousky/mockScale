const express = require('express');
const router = express.Router();
const scale = require('../model/Scale');
const cors = require('cors');

/* GET home page. */
router.get('/', cors(), async function(req, res, next) {
  const inventoryData = await scale.getItems(6);
  console.log(inventoryData);

  res.render('template', {
    locals: {
    title: 'Scale',
    inventoryData: inventoryData
    },
    partials: {
      partial: 'partial-index'
    }
  });

});

router.post('/', cors(), async function (req, res, next) {

  const id = req.body.itemToGrab;
  const currentWeight = 0;

  const updatedItem = await scale.update(id, currentWeight);

  console.log('Item has been updated', updatedItem);
  res.redirect('/');
});

router.post('/replace', cors(), async function(req, res, next) {
  const id = req.body.itemToGrab;
  const currentWeight = req.body.currentWeight;

  const updatedItem = await scale.update(id, currentWeight);

  console.log('Item has been updated', updatedItem);
  res.redirect('/');
})

module.exports = router;
