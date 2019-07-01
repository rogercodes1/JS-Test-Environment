// console.log("SHORT");

let s = "dabbcabcd"
let ss = "dabbacbcd"

// output = abcd

// solution runs in O(ab) time. Meaning the first while loop is the first O(n) and
// b is the time of the second while loop which is not the same size of the first loop.
function shortestSubstring(s){
  let start, end, count;
  let arr = s.split("")
  let charValArr = generateArrayOfChars(arr)
  let charLen = charValArr.length
  let i = 0;
  let result = s; // sets the answer to the full string to compare to shorter minimal string

  while (i < arr.length ){
    let strCheck = arr.slice(i,charLen + i).join("")
    count = 0;
    let j = 0
    while ( j < charValArr.length){
      if (!strCheck.includes(charValArr[j])){ break }
      count++
      start = i
      end = i + strCheck.length
      if (count == charValArr.length){
        break
      }
      else {
        j++
      }
    } // end of while
    let currStr = arr.slice(start,end).join("")
    if (count === charValArr.length && currStr.length < result.length ){
      result = currStr
      break
    }
    // if resets back to i === 0 and starts validating once more by adding a new char to string comparison
    if (i === (arr.length - charLen)) {
      i = -1
      charLen+=1
    }
    i++
  }
  return result.length

}

// generates the unique chars/letters needed to compare to find a solution.
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
