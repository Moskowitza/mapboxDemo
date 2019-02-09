const express = require('express');
// require Express
const router = express.Router(); // setup usage of the Express router engine

/* PostgreSQL and PostGIS module and connection setup */
const { Client, Query } = require('pg');

// Setup connection
const username = '.env.SQLUSERNAME'; // sandbox username
const password = '.env.SQLPASSWORD'; // read only privileges on our table
const host = 'localhost:5432';
const database = 'cambridge'; // database name
const conString =
  'postgres://' + username + ':' + password + '@' + host + '/' + database; // Your Database Connection

// Set up your database query to display GeoJSON
const coffee_query =
  "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id, name)) As properties FROM coffee_shops As lg) As f) As fc";

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
