const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_db',
});

app.use(bodyParser.json());

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const values = [username, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json({ message: 'User registered successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
