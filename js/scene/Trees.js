define(function () {

  function draw() {
    const { context, scene } = this

    // Left tree
    context.fillStyle = scene.trees.trunk.color
    context.fillRect(100, 200, 20, 150)

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[0]
    context.arc(140, 180, 40, 0, 2 * Math.PI)
    context.fill()

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[1]
    context.arc(80, 190, 30, 0, 2 * Math.PI)
    context.fill()

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[2]
    context.arc(110, 200, 50, 0, 2 * Math.PI)
    context.fill()

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[3]
    context.arc(120, 230, 30, 0, 2 * Math.PI)
    context.fill()

    // Right tree
    context.fillStyle = scene.trees.trunk.color
    context.fillRect(900, 200, 20, 150)

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[3]
    context.moveTo(850, 300)
    context.lineTo(910, 200)
    context.lineTo(970, 300)
    context.fill()

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[2]
    context.moveTo(850, 250)
    context.lineTo(910, 150)
    context.lineTo(970, 250)
    context.fill()

    context.beginPath()
    context.fillStyle = scene.trees.foliage.color[1]
    context.moveTo(850, 200)
    context.lineTo(910, 100)
    context.lineTo(970, 200)
    context.fill()
  }

  return { draw }

})