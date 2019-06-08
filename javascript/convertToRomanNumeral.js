function convertToRoman(num) {
    var numArr = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanArr = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let result = ""
    let i = 0
    let j = 0
    while (num){
        if (num >= numArr[i]){
            result += romanArr[i]
            num = num - numArr[i]
        }
        if (num <= numArr[i]){
          if (num ===numArr[i]){
            result += romanArr[i]
            num = num - numArr[i]
          }
            i++
        }
    }
    
 return result;
}
