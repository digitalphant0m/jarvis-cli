var getAvengers = require('../web-components/avengers-component')
var Nav = require('../web-components/nav')

var AvengersPage = function() {
  var AvengerDetail = function(router) {
    Nav(router)
    avengersComponent(router)
  }
}

module.exports = AvengersPage
