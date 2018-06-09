let createCard = require('./card')

var getAvengers = function() {
  let req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4){

      let card = new Card()
      createCard(JSON.parse(this.responseText))
    }
  }

  req.open('Get', 'http://onyx.zerodevgroup.com:4000')
  req.send()
  
}

module.exports = getAvengers


