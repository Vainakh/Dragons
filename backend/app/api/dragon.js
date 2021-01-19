const { Router } = require('express');
const DragonTable = require('../dragon/table');

const router = new Router();

router.get("/new", (req, res, next) => {
  console.log("Hello world!")
  // console.log(req.app.locals.engine.generation)
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
  .then(({dragonId}) => {
    // console.log('dragonId', dragonId);

    dragon.dragonId = dragonId;
    // console.log({dragon})
    res.json({ dragon });
  })
  .catch(error => next(error));
});

module.exports = router;