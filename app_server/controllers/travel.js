// Render the Travel page using the Handlebars template.
function travel(req, res) {
  res.render('travel', {
    title: 'Travlr Getaways',
    layout: false
  });
}

module.exports = { travel };
