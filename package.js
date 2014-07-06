Package.describe({
  summary: "jQuery plugin for collapsing and expanding long blocks of text"
});

Package.on_use(function (api, where) {
  api.add_files('readmore.min.js', 'client');
});
