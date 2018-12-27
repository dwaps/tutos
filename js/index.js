require(['Constants', 'Utils', 'Game'], function ({ tags }, Utils, Game) {
  Utils.init(tags)
  new Game(tags.canvas).start()
})