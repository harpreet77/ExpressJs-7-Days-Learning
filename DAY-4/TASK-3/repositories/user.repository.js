const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'taskflow',
});

connection.connect(err => {
  if (err) {
    console.error('Connection error:', err);
    return;
  }
  console.log('MySQL connected');
});

const UserModel = {
  getById(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
        if (err) return reject(err);
        resolve(rows[0] || null);
      });
    });
  },
};

module.exports = UserModel;