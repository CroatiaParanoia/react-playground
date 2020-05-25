const ghPages = require('gh-pages');

ghPages.publish('build', function(err) {
  console.log(err);
});
