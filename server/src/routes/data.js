const router = require('express').Router();
const knex = require('../knex');

const tableName = 'memos';

//DBの情報を全て取得してくるエンドポイント
router.get('/', async (req, res) => {
  const data = await knex('memos').select('*');
  res.send(data);
});

//DBに情報をPOSTするエンドポイント
router.post('/:username', async (req, res) => {
  const user = req.params.username;
  if (user === 'testUser') {
    const reqBody = req.body;
    req.body.user_id = 10000;
    const data = await knex(tableName)
      .insert(reqBody)
      .returning('id')
      .then((elm) => elm[0].id);
    console.log('newId : ', data);
    res.send({ id: data });
  } else {
    res.send('userが違います');
  }
});

module.exports = router;
