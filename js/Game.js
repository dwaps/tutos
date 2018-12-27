define(function () {
  const alpha = 1 // DEBUG

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
        bg: {
          color: [
            `rgba(100, 0, 255, ${alpha})`,
            `rgba(50, 0, 255, ${alpha})`,
          ],
          snow: {
            color: [
              `rgba(255, 255, 255, ${alpha})`,
              `rgba(210, 210, 255, ${alpha})`,
            ],
          },
        },
        fg: {
          color: [
            `rgba(10, 0, 150, ${alpha})`,
            `rgba(10, 0, 100, ${alpha})`,
          ],
        },
      },
    },
  }

  function drawScene() {
    drawSkyAndOcean.call(this)
    drawMounts.call(this)
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

  function drawMounts() {
    const { context, scene } = this

    let y = 200
    const step = 200
    let colorMount = false

    // Background mountains
    for (let x = 0; x < 800; x += step) {
      context.beginPath()
      context.fillStyle = scene.mounts.bg.color[colorMount ? 0 : 1]
      context.moveTo(x, 400)
      context.lineTo(y, 100)
      y += step
      context.lineTo(y, 400)
      context.fill()
      colorMount = !colorMount

      context.beginPath()
      context.fillStyle = scene.mounts.bg.snow.color[0]
      context.moveTo(x + 133, 200)
      context.lineTo(x + 200, 100)
      context.lineTo(x + 200, 300)
      context.fill()
      context.beginPath()
      context.fillStyle = scene.mounts.bg.snow.color[1]
      context.moveTo(x + 200, 300)
      context.lineTo(x + 200, 100)
      context.lineTo(x + 267, 200)
      context.fill()
    }

    // Nearest mountains
    for (let x = 0; x <= 600; x += 600) {
      context.beginPath()
      context.fillStyle = scene.mounts.fg.color[0]
      context.moveTo(x, 400)
      context.lineTo(x + 200, 300)
      context.lineTo(x + 200, 450)
      context.fill()
      context.beginPath()
      context.fillStyle = scene.mounts.fg.color[1]
      context.moveTo(x + 200, 450)
      context.lineTo(x + 200, 300)
      context.lineTo(x + 400, 400)
      context.fill()
    }
  }

  return Game
})