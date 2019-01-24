console.log("Grid Line");
let title = document.getElementById("h1-title");
title.innerHTML = "Grid Line"
let gridArray = [
  [2,4,6,8],
  [1,3,5,7],
  [15,13,11,9],
  // [16,14,12,10]
]
// Determine size of grid array 3
// Determine size of sub-array 4
// if goin from left to right remove elem and add to finalArray
// if we reach end of current array move to next direction.
// i.e south, west, north, east
// after switching direction push elem to new array


function singleGridLineArray(gridArray){
  let xCoordTotal = gridArray.length
  let yCoordTotal = gridArray[0].length
  let count = 0
  let xCoord = 0
  let yCoord = 0
  let direction = "E";
  let finalArray = []

  // while (gridArray.length != 0 || count === 40){
    // gridDirection(direction, xCoord, yCoord, xCoordTotal, yCoordTotal)


    // count++
  // }

}

singleGridLineArray(gridArray)

function gridDirection(
  direction,
  xCoord,
  yCoord,
  xCoordTotal,
  yCoordTotal) {
  let count = 0
  switch (direction) {
    case "N":
      return
    case "E":
      while (yCoord != xCoordTotal || count !=10){
        console.log(gridArray[xCoord]);
        console.log(gridArray[xCoord][yCoord]);
        debugger
        gridArray[xCoord][yCoord]
        count++
      }
      return
    case "S":
      return
    case "W":
      return
    default:
      break
  }
}
