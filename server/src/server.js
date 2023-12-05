const express = require('express');
const knex = require('./knex');
const path = require('path');
require('dotenv').config();
const apiRoute = require('./routes/index');
const cors = require('cors');
const app = express();
const PORT = 4242 || process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

// app.get('/', (req, res) => {
//   res.send('Hello Node');
// });
app.use('/api/v1', apiRoute);
app.use(express.static(path.join(__dirname, '../../client/dist/')));
app.use('/personal/memo', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log('server is runnnig');
});
