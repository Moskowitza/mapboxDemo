const { Pool, Client } = require("pg");

const username = process.env.SQLUSERNAME;
// sandbox username
const password = process.env.SQLPASSWORD; // read only privileges on our table
const host = "localhost:5432";
const database = "cambridge"; // database name
const connetionString = `postgres://${username}:${password}@${host}/${database}`; // Your

const pool = new Pool({
  connectionString: connetionString, // read only privileges on our table
});
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const client = new Client({
  connectionString: connetionString,
});
client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
