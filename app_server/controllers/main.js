function index(req, res) {
  res.render('index', {
    title: 'Travlr Getaways',
    layout: 'layouts/layout'
  });
}

module.exports = { index };
