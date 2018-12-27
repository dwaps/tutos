(() => {
  const container = document.querySelector('#container')
  const canvas = document.querySelector('#canvas')
  const btScreenMode = document.querySelector('#bt-screen-mode')

  let toggleFullscreen = false
  const html = document.documentElement

  btScreenMode.addEventListener('click', () => {
    fullscreen()
  })

  function fullscreen() {
    container.classList.toggle('fullscreen')
    canvas.classList.toggle('fullscreen')
    btScreenMode.classList.toggle('fullscreen')
    toggleFullscreen = !toggleFullscreen
    openFullscreen(toggleFullscreen)
  }

  function openFullscreen(yes) {
    if (yes) {
      if (html.requestFullscreen) {
        html.requestFullscreen();
      } else if (html.mozRequestFullScreen) { /* Firefox */
        html.mozRequestFullScreen();
      } else if (html.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        html.webkitRequestFullscreen();
      } else if (html.msRequestFullscreen) { /* IE/Edge */
        html.msRequestFullscreen();
      }
    }
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  }

})()
