const pool = require('../../databasePool');

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
          resolve({ dragonId });
        }
      )
    });
  }
}

module.exports = DragonTable;