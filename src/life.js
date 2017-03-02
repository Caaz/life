var world;

module.exports = {
  world,
  init(size) {
    console.log('Making world of size ' + size)
    this.world = []
    for(var x = 0; x < size; x++) {
      this.world[x] = []
      for(var y = 0; y < size; y++) {
        this.world[x][y] = (Math.random() > .5)
      }
    }
    this.lastWorld = this.world
  },
  step(){
    var newWorld = []
    for(var x = 0; x < this.world.length; x++) {
      newWorld[x] = []
      for(var y = 0; y < this.world[x].length; y++) {
        var count = this.countNeighbors(x,y)
        if(this.world[x][y]) {
          if(count < 2) newWorld[x][y] = false
          else if(count <= 3) newWorld[x][y] = true
          else if(count > 3) newWorld[x][y] = false
        }
        else {
          if(count === 3) newWorld[x][y] = true
          else newWorld[x][y] = false
        }
      }
    }
    this.lastWorld = this.world
    this.world = newWorld
  },
  countNeighbors(x,y) {
    var count = 0;
    for(var neighborX = x - 1; neighborX <= x + 1; neighborX++) {
      var viewedX = neighborX
      if(viewedX < 0) viewedX = this.world.length + neighborX
      if(viewedX > this.world.length - 1) viewedX -= this.world.length - 1
      for(var neighborY = y - 1; neighborY <= y + 1; neighborY++) {
        var viewedY = neighborY
        if(viewedY < 0) viewedY = this.world[x].length + neighborY
        if(viewedY > this.world[x].length - 1) viewedY -= this.world[x].length - 1
        if(!((viewedX == x) && (viewedY == y)) && (this.world[viewedX][viewedY])) count++
      }
    }
    return count
  }
}
