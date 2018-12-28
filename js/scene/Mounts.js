define(function () {

  function draw() {
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

  return { draw }
})