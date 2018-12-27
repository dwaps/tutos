const Utils = (function () {
  const html = document.documentElement

  let toggleFullscreen = false

  const init = ({ container, canvas, btScreenMode }) => {
    btScreenMode.addEventListener('click', function () {
      changeScreenMode(this)
    })
  }

  const changeScreenMode = (bt) => {
    toggleFullscreen = !toggleFullscreen

    if (toggleFullscreen) {
      if (html.requestFullscreen) html.requestFullscreen()
      if (html.mozRequestFullScreen) html.mozRequestFullScreen()
      if (html.webkitRequestFullscreen) html.webkitRequestFullscreen()
      if (html.msRequestFullscreen) html.msRequestFullscreen()
    }
    else {
      if (document.exitFullscreen) document.exitFullscreen()
      if (document.mozCancelFullScreen) document.mozCancelFullScreen()
      if (document.webkitExitFullscreen) document.webkitExitFullscreen()
      if (document.msExitFullscreen) document.msExitFullscreen()
    }

    container.classList.toggle('fullscreen')
    canvas.classList.toggle('fullscreen')
    bt.classList.toggle('fullscreen')
  }

  return { init }

})()