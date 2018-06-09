var Menu = function() {
  let content = document.getElementById('content')

  let nav = document.createElement('div')
  nav.className = 'w3-bar w3-blue'

  let home = document.createElement('div')
  home.className = 'w3-bar-item w3-button'
  home.href = '#'
  home.innerHTML = 'Home'

  nav.append(home)

  
  let av_nav = document.createElement('div')
  av_nav.className = 'w3-bar-item w3-button'
  av_.href = '#/avengers'
  av_nav.innerHTML = 'Avengers'
  
  nav.append(home)

  content.append(nav)

}


module.exports = Menu
