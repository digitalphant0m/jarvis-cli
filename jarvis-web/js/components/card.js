let constants = require('./constants')
var card = function(arr) {
  
  for (var x=0; x<arr.length; x++) { 
    var card = document.createElement('div')
    card.style.width = '25%'
    card.className = 'w3-card-4'
    card.style.marginTop = '8px'
    card.style.marginLeft = '8px'
    card.style.marginRight = '8px'
    card.style.marginBottom = '8px'
    card.style.float = 'left'
    card.style.display = 'inline'

    var img = document.createElement('img')
    img.style.width = '100%'


    if(arr[x].name == 'Hulk'){
      img.src = '/assets/littlehulk.png'
    }
    else  if(arr[x].name == 'Captain America'){
      img.src = '/assets/captainamerica.png'
    }
    else  if(arr[x].name == 'Spider-Man'){
      img.src = '/assets/spiderman.png'
    }
    else  if(arr[x].name == 'Vision'){
      img.src = '/assets/vision.png'
    }
    else  if(arr[x].name == 'Thor'){
      img.src = '/assets/thorpic.png'
    }

    card.append(img)

    var cardContainer = document.createElement('div')
    cardContainer.className = 'w3-container w3-center'
    card.append(cardContainer)

    var note = document.createElement('p')
    note.innerHTML = arr[x].description
    cardContainer.append(note)

    content.append(card)
  }
}
  

module.exports = card
