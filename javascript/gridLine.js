// console.log("Grid Line");
let title = document.getElementById("h1-title");
title.innerHTML = "Grid Line"
let gridArray = [
  [2, 4, 6, 8],
  [1, 3, 5, 7],
  [15,13,11,9],
  [16,14,12,10]
]

function singleGridLineArray(gridArray){
  let totalMoves = (gridArray.length * gridArray[0].length)
  let count = 0, xCoord = 0, yCoord = 0
  let direction = "E", finalArray = []

  while (count !== totalMoves){
    if (direction === 'E'){
      let arrLength = gridArray[0].length - 1
      finalArray.push(gridArray[yCoord][xCoord])
      if (xCoord === arrLength ){
        gridArray.shift();
        direction = gridDirection(direction)
        xCoord--
      }
      xCoord++
    }
    else if (direction === 'S') {
      let arrTotal = gridArray.length - 1

      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].pop();
      if (arrTotal === yCoord){
        direction = gridDirection(direction)
        xCoord--, yCoord--
      }
      yCoord++
    }
    else if (direction === "W") {
      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].pop();
      if (xCoord === 0){
        gridArray.pop();
        direction = gridDirection(direction)
        yCoord--, xCoord++
      }
      xCoord--
    }
    else if (direction === "N") {
      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].shift()
      if (yCoord === 0){
        direction = gridDirection(direction)
        yCoord++
      }
      yCoord--

    }
    count++
  }
  console.log("FINAL",finalArray);
  return finalArray
}

// singleGridLineArray(gridArray)

function gridDirection(direction) {
  switch (direction) {
    case "N":
      return direction = "E"
    case "E":
      return direction = "S";
    case "S":
      return direction = "W"
    case "W":
      return direction = "N"
    default:
      break
  }
}
function updatedGridArray(gridArray){
  let totalMoves = (gridArray.length * gridArray[0].length)
  let count = 0, xCoord = 0, yCoord = 0
  let direction = "E", finalArray = []
  console.log("obj");
  while (count !== totalMoves){
    switch (direction) {
      case "E":
          let arrLength = gridArray[0].length - 1
          finalArray.push(gridArray[yCoord][xCoord])
          console.log(finalArray);
          if (xCoord === arrLength ){
            gridArray.shift();
            xCoord--
            direction = "S"
          }
          xCoord++
          debugger
      case "S":
          let arrTotal = gridArray.length - 1
          finalArray.push(gridArray[yCoord][xCoord])
          gridArray[yCoord].pop();
          if (arrTotal === yCoord){
            xCoord--, yCoord--
            direction = "W"
          }
          yCoord++
      case "W":
          finalArray.push(gridArray[yCoord][xCoord])
          gridArray[yCoord].pop();
          if (xCoord === 0){
            gridArray.pop();
            yCoord--, xCoord++
            direction = "N"
          }
          xCoord--
      case "N":
          finalArray.push(gridArray[yCoord][xCoord])
          gridArray[yCoord].shift()
          if (yCoord === 0){
            yCoord++
            direction = "E"
          }
          yCoord--
      default:
        return "Error maybe?"

    }
    count++
  }
  console.log("FINAL",finalArray);
  return finalArray
}
updatedGridArray(gridArray)

// console.log("FINAL: ",finalArray);
// console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
// console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
// console.log("GRID: ",gridArray);
// debugger


// [16,14,12,10]
// [15,13,11,9],
// [1,3,5,7],
// [2,4,6,8],

// Determine size of grid array 3
// Determine size of sub-array 4
// if goin from left to right remove elem and add to finalArray
// if we reach end of current array move to next direction.
// i.e south, west, north, east
// after switching direction push elem to new array
