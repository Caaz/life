// Pew
var life = require('./life')
var config = require('./config')

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  document.body.appendChild(canvas)
  canvas.width = config.worldSize * config.cellSize
  canvas.height = config.worldSize * config.cellSize
  life.init(config.worldSize)
  for(var i = 0; i < config.prestep; i++) { life.step() }
  window.setInterval(() => {
    life.step()
    for(var x = 0; x < life.world.length; x++) {
      for(var y = 0; y < life.world[x].length; y++) {
        ctx.fillStyle = (life.world[x][y])? config.colors.living : config.colors.dead
        if(life.lastWorld[x][y] != life.world[x][y]) ctx.fillStyle = (life.world[x][y])? config.colors.birth : config.colors.death
        ctx.fillRect(config.cellSize*x, config.cellSize*y, config.cellSize, config.cellSize)
      }
    }
  }, config.wait)
})
