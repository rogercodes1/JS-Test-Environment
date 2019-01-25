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
  let arrTotal = gridArray.length
  let elemTotal = gridArray[0].length
  let count = 0
  let xCoord = 0
  let yCoord = 0
  let direction = "E";
  let finalArray = []

  while (count !== 10){
    // gridDirection(direction, xCoord, yCoord, elemTotal , arrTotal)
    if (direction === 'E'){
      finalArray.push(gridArray[yCoord][xCoord])
      // console.log(finalArray);
      // console.log('arrTotal:',arrTotal, 'elemTotal : ',elemTotal );
      // debugger
      xCoord +=1
      if (xCoord === elemTotal ){
        direction = gridDirection(direction)
        gridArray.shift();
        arrTotal = gridArray.length
        // console.log("After shift arrTotal:", arrTotal);
        xCoord -=1
        // debugger
      }
    }
    else if (direction === 'S') {
      // debugger
      finalArray.push(gridArray[yCoord][xCoord])
      // debugger
      gridArray[yCoord].pop();
      console.log(finalArray);
      yCoord++
      // console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
      // console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
      // debugger
      if (elemTotal - 1 === gridArray[yCoord].length-1){
        elemTotal--
        xCoord--
        console.log("AFTER:");
        console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
        console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
        gridArray[yCoord].pop();
        // debugger
        direction = gridDirection(direction)
      }
    }
    else if (direction === "W") {
      console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
      console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
      console.log(gridArray);
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
