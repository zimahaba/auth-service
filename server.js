const express = require('express');
const { client } = require('./db');

const users = []

const app = express();
app.use(express.json())

client.connect()
.then(() => console.log('Connected to postgres'))
.catch((err) => console.log('Postgres conn error: ', err));

app.get('/users', (req, res) => {
  client.query('SELECT * FROM user_credentials')
  .then((result) => {
    res.json(result.rows);
  });
});

app.post('/users', async (req, res) => {
  try {
    await client.query(
      "INSERT INTO user_credentials (username, password, created) VALUES ($1, $2, $3)", ['zimahaba', 'pass', new Date()]
    );
    
  } catch (err) {
    console.log(err);
  }
  
});

app.listen(8000, () => {
  console.log('Server started on port 8000.')
});