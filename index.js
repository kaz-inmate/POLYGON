const fs = require('fs')
const csv = require('csv-parser');
const express = require('express');
const app = express();
const POLYGON = require('./polygon');
const cors = require('cors');

app.get('/', cors(), (req, res) => {
  let dd = [];
fs.createReadStream('POLYGON.csv')
  .pipe(csv(['Type', 'Name' , 'Coridnates']))
  .on('data', (row) => {
    row.Coridnates = row.Coridnates.split('|')
    row.Coridnates = row.Coridnates.map(m => m.split('-'))
    dd.push(new POLYGON(row.Type, row.Name, row.Coridnates));
    
  })
  .on('end', () => {
console.log('CSV file successfully processed');
    // let dk = dd.map(d => {
    //   return d.calcCentroid()
    // });
    // console.log(dk)
const triangleCentroid = dd[0].calcCentroid()
const quadrilateralCentroid = dd[1].calcCentroid()
const eucilideanDis =  Math.sqrt(Math.pow((quadrilateralCentroid[0] - triangleCentroid[0]), 2) + Math.pow((quadrilateralCentroid[1] - triangleCentroid[1]), 2))
res.send({dd, triangleCentroid, quadrilateralCentroid, eucilideanDis})
  });
});

app.listen(8080, () => {
  console.log('listening on port: 8080');
});