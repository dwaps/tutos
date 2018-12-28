define(function () {

  function draw() {
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

  return { draw }
})