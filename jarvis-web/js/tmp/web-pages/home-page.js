var HomePage = function() {
  var content = document.getElementById('content')

  //Nav Menu
  
  let nav = document.getElementById('nav')
  nav.className = 'w3-bar w3-blue'

  //Home Nav Item

  let home = document.getElementById('home')
  home.className = 'w3-bar-item w3-button'
  home.href = '#'
  home.innerHTML = 'Home'
  nav.append(home)

  //Avengers Nav item

  let av_nav = document.getElementById('avengers')
  av_nav.className = 'w3-bar-item w3-button'
  av_nav.href ='#/avengers'
  av_nav.innerHTML = 'Avengers'
  nav.append(av_nav)
  content.append(nav)

}


module.exports = HomePage
