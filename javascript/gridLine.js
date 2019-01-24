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
  let colTotal = gridArray.length
  let rowTotal= gridArray[0].length
  let count = 0
  let xCoord = 0
  let yCoord = 0
  let direction = "E";
  let finalArray = []

  while (count !== 10){
    // gridDirection(direction, xCoord, yCoord, rowTotal, colTotal)
    console.log("xCoord: ",xCoord);
    if (direction === 'E'){
      finalArray.push(gridArray[yCoord][xCoord])
      console.log(finalArray);
      console.log('colTotal:',colTotal, 'rowTotal: ',rowTotal);
      // debugger
      xCoord +=1
      if (xCoord === rowTotal){
        direction = gridDirection(direction)
        gridArray.shift();
        colTotal = gridArray.length
        // console.log("After shift colTotal:", colTotal);
        xCoord -=1
        // debugger
      }
    }
    else if (direction === 'S') {
      // debugger
      finalArray.push(gridArray[yCoord][xCoord])
      gridArray.pop();
      console.log(finalArray);
      debugger
    }

    console.log("COUNT", count);
    count++
  }

}

singleGridLineArray(gridArray)

function gridDirection(direction,
  xCoord,
  yCoord,
  rowTotal,
  colTotal) {
  let countNum = 0
  switch (direction) {
    case "N":
      return
    case "E":
      return direction = "S";
    case "S":
      return
    case "W":
      return
    default:
      break
  }
}
