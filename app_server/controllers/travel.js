
const fs = require('fs');
const path = require('path');

// Read the trip information from the JSON file.
const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

// Render the Travel page and pass the trip data to the template.
function travel(req, res) {
  res.render('travel', {
    title: 'Travlr Getaways',
    layout: false,
    trips: trips
  });
}

module.exports = { travel };
