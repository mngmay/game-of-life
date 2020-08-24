import { cloneDeep } from "lodash";

export const automata = (grid) => {
  let buffer = cloneDeep(grid);

  console.log(grid);

  // up, down, left, right, nw, sw, ne, se
  const NEIGHBORS = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, -1],
    [-1, -1],
    [1, 1],
    [-1, 1],
  ];

  // check all neighbors

  const checkNeighbors = (i, j) => {
    let neighborCount = 0;
    let gridBoundary = grid.length - 1;
    for (let k = 0; k < NEIGHBORS.length; k++) {
      let [x, y] = NEIGHBORS[k];
      let [nX, nY] = [x + i, y + j];

      // if neighbor coord are within the grid
      if (0 <= nX && 0 <= nY && nX <= gridBoundary && nY <= gridBoundary) {
        let neighbor = grid[nX][nY];
        if (neighbor) {
          neighborCount++;
        }
      }
    }
    return neighborCount;
  };

  // determine cell state
  grid.map((row, x) =>
    row.map((cell, y) => {
      let neighbors = checkNeighbors(x, y);
      if (grid[x][y]) {
        // live cells must have exactly 2 or 3 neighbors to survive
        if (neighbors !== 3 && neighbors !== 2) {
          buffer[x][y] = false;
        }
      } else {
        // dead cells must have exactly 3 neighbors to become live
        if (neighbors === 3) {
          buffer[x][y] = true;
        }
      }
      return cell;
    })
  );

  return buffer;
};
