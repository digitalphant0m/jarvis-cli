//var root = 'http://slattaker.tgb.ninja:3000/#';
var root = 'http://localhost:3000/#'
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);
var Api = require('./components/api.js')

router.on('/avengers', function () {
      let api = new Api()
      let content = document.getElementById('content').innerHTML = ''
      let av =  document.getElementById('avengers')
      av.onclick = api.getData()

      content.append(av)
  })

.resolve();
