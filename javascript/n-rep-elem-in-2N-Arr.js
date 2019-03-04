// console.log("2N-Arr");
// let arr = [2,1,2,5,3,2];
let arr2 = [5,1,5,2,5,3,5,4];
let repeatedNTimes = function(A) {

    let countNumObj = {};
    let numKey, value = 0;
    A.forEach(num =>{
        (!countNumObj.hasOwnProperty(num))
        ? countNumObj[num]=1
        : countNumObj[num] +=1
    })
    // Commented out code using reduce returns largest value. Works. Alt sol.
    // let finalKey = Object.keys(countNumObj).reduce((a, b) => countNumObj[a] > countNumObj[b] ? a : b);
    // MySOLUTION:
    let otherKey = Object.keys(countNumObj).forEach((key)=>{
      if (countNumObj[key]> value){
        numKey = key
        value = countNumObj[key]
      }
    });
    console.log("numKey: ", numKey);
    return numKey
    debugger
};

repeatedNTimes(arr2)
