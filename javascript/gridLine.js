// console.log("Grid Line");
let title = document.getElementById("h1-title");
title.innerHTML = "Grid Line"
let gridArray = [
  [2,4,6,8],
  [1,3,5,7],
  [15,13,11,9],
  [16,14,12,10]
]

function singleGridLineArray(gridArray){
  let arrTotal = gridArray.length - 1
  let elemTotal = gridArray[0].length - 1
  let count = 0
  let xCoord = 0
  let yCoord = 0
  let direction = "E";
  let finalArray = []

  while (count !== 12){
    if (direction === 'E'){
      finalArray.push(gridArray[yCoord][0])
      gridArray[yCoord].shift()
      if (gridArray[yCoord].length === 0 ){
        gridArray.shift();
        arrTotal--
        xCoord--
        direction = gridDirection(direction)
        // debugger
      }
      xCoord++

    }
    else if (direction === 'S') {
      finalArray.push(gridArray[yCoord][elemTotal])
      gridArray[yCoord].pop();
      if (arrTotal === yCoord){
        // finalArray.push(gridArray[yCoord][xCoord])
        xCoord--
        yCoord--
        // gridArray[yCoord].pop();
        // debugger
        direction = gridDirection(direction)
      }
      yCoord++
    }
    else if (direction === "W") {

      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].pop();
      xCoord--
      // console.log("AFTER:");
      console.log("FINAL: ",finalArray);
      console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
      console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
      console.log("GRID: ",gridArray);
      debugger

      if (gridArray[yCoord].length === 0){
        debugger

        finalArray.push(gridArray[yCoord][xCoord])
        gridArray.pop();

        arrTotal = gridArray.length
        direction = gridDirection(direction)
        // debugger
      }
    }
    else if (direction === "N") {
      console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
      console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
      console.log(gridArray);
      console.log(finalArray);

      debugger;
    }

    if (count === 10) {console.log("COUNT", count);}
    count++
  }

}

singleGridLineArray(gridArray)

function gridDirection(direction,
  xCoord,
  yCoord,
  elemTotal ,
  arrTotal) {
  let countNum = 0
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
