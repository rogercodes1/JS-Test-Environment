// console.log("SHORT");

let s = "dabbcabcd"
let ss = "dabbacbcd"

// output = abcd


function shortestSubstring(s){
  let start, end, count;
  let arr = s.split("")
  let charValArr = generateArrayOfChars(arr)
  let charLen = charValArr.length
  let i = 0;
  let result = s; // sets the answer to the full string to compare to shorter minimal string

  while (i < arr.length ){
    let strCheck = arr.slice(i,charLen + i)
    let str = strCheck.join("")
    count = 0;
    let j = 0
    while ( j < charValArr.length){
      if (!str.includes(charValArr[j])){
        break
      }
      count++
      start = i
      end = i + str.length
      if (count == charValArr.length){
        break
      }
      else {
        j++
      }
    } // end of while
    let temp = arr.slice(start,end).join("")
    if (count === charValArr.length && temp.length < result.length ){
      result = temp
      break
    }
    if (i === (arr.length - charLen)) {
      i = -1
      charLen+=1
    }
    i++
  }
  return result

}

function generateArrayOfChars(arr){
  let charObj = {}
  for (let i = 0; i<arr.length; i++){
    if (!charObj.hasOwnProperty(arr[i])){
      charObj[arr[i]] = arr[i]
    }
  }
  return Object.keys(charObj)
}

shortestSubstring(ss)
