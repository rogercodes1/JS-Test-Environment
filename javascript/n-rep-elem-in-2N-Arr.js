// console.log("2N-Arr");

let repeatedNTimes = function(A) {
    console.log("A: ",A)
    let countNumObj = {};

    A.forEach(num =>{
        console.log("NUM: ", num)
        console.log("CNO:", countNumObj.length)
        if (countNumObj.length === 0 || !countNumObj.keys.includes(num)) {
            countNumObj[num]=1
        } else {
            countNumObj +=1
        }
    })
    console.log("CNO: ",countNumObj)
};
