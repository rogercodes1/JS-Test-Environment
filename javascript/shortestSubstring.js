console.log("SHORT");

let s = "dabbcabcd"
// output = abcd


function shortestSubstring(s){
  let arr = s.split("")
  let charValArr = generateArrayOfChars(arr)
  console.log("C:", charValArr);
  debugger
}
shortestSubstring(s)

function generateArrayOfChars(arr){
  let charObj = {}
  for (let i = 0; i<arr.length; i++){
    if (!charObj.hasOwnProperty(arr[i])){
      charObj[arr[i]] = arr[i]
    }
  }
  return Object.keys(charObj)
}
