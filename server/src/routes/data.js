const router = require('express').Router();
const knex = require('../knex');

const tableName = 'memos';

//DBの情報を全て取得してくるエンドポイント
router.get('/', async (req, res) => {
  const data = await knex('memos').select('*').orderBy('update_date', 'desc');
  res.send(data);
});

//DBに情報新規登録するエンドポイント
router.post('/memo/:id', async (req, res) => {
  const newId = req.params.id;
  const reqBody = req.body;
  req.body.user_id = 10000;
  req.body.id = newId;
  const data = await knex(tableName)
    .insert(reqBody)
    .returning('id')
    .then((elm) => elm[0].id);
  console.log('newId : ', data);
  res.send({ id: data });
});

router.patch('/memo/:id', async (req, res) => {
  const memoId = req.params.id;

  const reqBody = req.body;
  req.body.user_id = 10000;
  const data = await knex(tableName)
    .where({ id: memoId })
    .update(reqBody)
    .returning('id')
    .then((elm) => elm[0].id);
  res.send({ id: data });
});

//DBの情報を削除するエンドポイント
router.delete('/:id', async (req, res) => {
  const memoId = req.params.id;
  const deleteHandle = await knex(tableName).where({ id: memoId }).del();
  res.send({ message: '削除完了しました' });
});

module.exports = router;
