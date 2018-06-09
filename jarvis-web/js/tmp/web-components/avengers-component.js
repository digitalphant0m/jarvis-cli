var createCard = require('./card-component') 

console.log('componentDidMount')



var getAvengers = function(router) {
   var req = new XMLHttpRequest()
    req.onreadystatechange = function() {
      console.log('readystatechange')
          if(req.readyState == 4){
            console.log(JSON.parse('bing',this.responseText))
            createCard(JSON.parse(this.responseText),router) 
          }
        }
     
    req.open('Get', 'http://localhost:4000')
    req.send()
}

module.exports = getAvengers 
