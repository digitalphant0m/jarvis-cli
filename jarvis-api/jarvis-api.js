require('dotenv').config()
let express = require('express')
let app = express()
let Marvel = require('./avengers')

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})


app.get('/', function(request,response) {

  var avengers = new Marvel({
    publicKey : process.env.MARVEL_PUBLIC_KEY,
    privateKey : process.env.MARVEL_PRIVATE_KEY
  })

  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))
  })

})

app.listen('4000', function() {
  console.log('listening on port: 4000')
})
