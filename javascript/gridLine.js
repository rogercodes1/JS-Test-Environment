console.log("Grid Line");
let gridArray = [
  [2,4,6,8],
  [1,3,5,7],
  [15,13,11,9],
  [16,14,12,10]
]
// Determine size of grid array
// Determine size of sub-array
// if goin from left to right remove elem and add to finalArray
// if we reach end of current array move to next direction.
// i.e south, west, north, east
// after switching direction push elem to new array


function singleGridLineArray(gridArray){
  let arrSize = gridArray.length
  let finalArray = [];
  for (let i = 0; i < gridArray.length; i++) {
    gridArray[i]
    // debugger;
    for (var j = 0; j < gridArray[i].length; j++) {
      gridArray[i][j]
      debugger



    }
  }
}

singleGridLineArray(gridArray)
