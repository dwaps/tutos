define(function () {

  const Game = function (canvas) {
    this.start = () => {
      console.log('starting...')
    }
  }

  Game.prototype = {
    context: canvas.getContext('2d')
  }

  return Game
})