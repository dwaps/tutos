define(function () {
  const alpha = .5 // DEBUG

  const Game = function (canvas) {
    this.start = () => {
      drawScene.call(this)
    }
  }

  Game.prototype = {
    context: canvas.getContext('2d'),
    width: canvas.width,
    height: canvas.height,
    scene: {
      sky: {
        colorStart: `rgba(0, 0, 255, ${alpha})`,
        colorStop: 'white',
      },
      ocean: {
        colorStart: `rgba(0, 180, 255, ${alpha})`,
        colorStop: 'white',
      },
      mounts: {
        color: [
          `rgba(100, 0, 255, ${alpha})`,
          `rgba(50, 0, 255, ${alpha})`,
        ],
        snow: {
          color: [
            `rgba(255, 255, 255, ${alpha})`,
            `rgba(210, 210, 255, ${alpha})`,
          ],
        }
      },
    },
  }

  function drawScene() {
    drawSkyAndOcean.call(this)
  }

  function drawSkyAndOcean() {
    const { context, width, height, scene } = this

    const sky = context.createLinearGradient(0, 0, 0, height)
    const ocean = context.createLinearGradient(0, height - 100, 0, height)

    sky.addColorStop(0, scene.sky.colorStart)
    sky.addColorStop(1, scene.sky.colorStop)
    ocean.addColorStop(0, scene.ocean.colorStart)
    ocean.addColorStop(1, scene.ocean.colorStop)

    context.fillStyle = sky
    context.fillRect(0, 0, width, height)
    context.fillStyle = ocean
    context.fillRect(0, height - 100, width, 100)
  }

  return Game
})