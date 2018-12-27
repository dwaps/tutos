
const tags = {
  container: document.querySelector('#container'),
  canvas: document.querySelector('#canvas'),
  btScreenMode: document.querySelector('#bt-screen-mode'),
}

Utils.init(tags)
Game(tags.canvas).init()