var root = 'http://localhost:3000/#'
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);
var HomeView = require('./views/home-view')
var AvengersView = require('./views/avengers-view')
var ThorView = require('./views/thor-view')

router  
.on( function () {
  document.getElementById('content').innerHTML = ''
  HomeView()
})

.on('/avengers', function () {
  document.getElementById('content').innerHTML = ''
  AvengersView()
})


.on('/thor', function () {
  document.getElementById('content').innerHTML = ''
  ThorView()
})


.resolve();
