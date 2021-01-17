const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
  static storeDragon(dragon) {
    const { birthday, nickname, generationId} = dragon;

    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(birthday, nickname, "generationId") VALUES($1, $2, $3) RETURNING id',
        [birthday, nickname, generationId],
        (error, response) => {
          if (error) return reject(error);
          const dragonId = response.rows[0].id;

          Promise.all(dragon.traits.map(({ traitType, traitValue }) => {
            return DragonTraitTable.storeDragonTrait({
              dragonId, traitType, traitValue
            });
          }))
          .then(() => ({ dragonId}))
          .catch(error => reject(error));
        }
      )
    });
  }
}

module.exports = DragonTable;