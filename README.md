# Game of Life

## What's this?

This is a project I started to test out using browserify. It simply simulates [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) in a canvas.

## Example

![screenshot.png](res/screenshot.png)

Taken with the following configuration:
```json
{
  "worldSize": 100,
  "cellSize": 4,
  "wait": 30,
  "prestep": 20,
  "colors": {
    "birth": "rgb(139, 8, 255)",
    "death": "rgb(92, 92, 92)",
    "living": "black",
    "dead": "rgba(255,255,255,.2)",
  }
}
```

## How can I see it in action?
- Install the project's dependencies
  - `npm install`
- Run the build script (Which uses browserify)
  - `npm run build`
- Open `index.html` in your browser.

You should be greeted with the simulation, nothing too special. If you'd like to make changes, there's a config file you can modify within the src directory.
