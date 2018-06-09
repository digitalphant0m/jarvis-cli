let api = require('marvel-api')

let marvel = api.createClient({
  publicKey:'d4f09d9002da96096362f14fcd49e0f4',
  privateKey:'3523acac85aefb5851c04cfb960b54e191921ea3'
})

class Marvel {
  constructor() {}

  getData() {
    marvel.characters.findAll()
      .then(res => {
        for (let i = 0; i < res.data.length; i++) { 
          console.log(res.data[i].name)
        }

      })
      .fail(console.error)
      .done();

  }

}

module.exports = Marvel
