define(['scene/SkyAndOcean', 'scene/Mounts', 'scene/Trees'], function (SkyAndOcean, Mounts, Trees) {
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
      trees: {
        trunk: {
          color: `rgba(100, 0, 20, ${alpha})`,
        },
        foliage: {
          color: [
            `rgba(0, 140, 25, ${alpha})`,
            `rgba(0, 110, 25, ${alpha})`,
            `rgba(0, 80, 25, ${alpha})`,
            `rgba(0, 50, 25, ${alpha})`,
          ],
        },
      },
    },
  }

  function drawScene() {
    SkyAndOcean.draw.call(this)
    Mounts.draw.call(this)
    Trees.draw.call(this)
  }

  return Game
})