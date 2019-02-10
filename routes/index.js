const express = require('express');
// require Express
const router = express.Router(); // setup usage of the Express router engine
const pg = require('pg');
const db = require('../db');
/* PostgreSQL and PostGIS module and connection setup */
// require Postgres module
const username = process.env.SQLUSERNAME;
const password = process.env.SQLPASSWORD; // read only privileges on our table
const host = 'localhost:5432';
const database = 'cambridge'; // database name
const conString = `postgres://${username}:${password}@${host}/${database}`; // Your

// Set up your database query to display GeoJSON
const coffeeQuery =
  "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id, name)) As properties FROM coffee_shops As lg) As f) As fc";

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'CHEESE',
  });
});

/* GET Postgres JSON data */
router.get('/data', async (req, res, next) => {
  console.log(`Get DATA!!!!`);
  // const client = new pg.Client(conString);
  // await client.connect();
  const { rows } = await db.query(coffeeQuery).catch(err => next(err));
  console.log(rows);
  res.send(rows);
  // console.log(rows);

  // res.on('end', result => {
  //   res.send(result.rows[0].row_to_json);
  //   res.end();
  // });
});

/* GET the map page */
router.get('/map', async (req, res) => {
  // const client = new pg.Client(conString);
  // await client.connect();
  // const query = db.query(coffeeQuery);
  const { rows } = await db.query(coffeeQuery).catch(err => next(err));

  const data = await rows[0].row_to_json;
  await res.render('map', {
    title: 'Express API',
    jsonData: data,
  });
});

// /* GET the filtered page */
// router.get('/filter*', async (req, res) => {
//   const { name } = req.query;
//   if (
//     name.indexOf('--') > -1 ||
//     name.indexOf("'") > -1 ||
//     name.indexOf(';') > -1 ||
//     name.indexOf('/*') > -1 ||
//     name.indexOf('xp_') > -1
//   ) {
//     console.log('Bad request detected');
//     res.redirect('/map');
//   } else {
//     console.log('Request passed');
//     const filterQuery = `SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id, name)) As properties FROM coffee_shops As lg WHERE lg.name = '${name}') As f) As fc`;
//     const client = new pg.Client(conString);
//     await client.connect();
//     const query = client.query(filterQuery);
//     query.on('row', (row, result) => {
//       result.addRow(row);
//     });
//     query.on('end', result => {
//       const data = result.rows[0].row_to_json;
//       res.render('map', {
//         title: 'Express API',
//         jsonData: data,
//       });
//     });
//   }
// });

module.exports = router;
