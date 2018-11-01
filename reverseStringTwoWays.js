console.log("hello")
let revArr=[];

var CoolString = {
  reverseAll: function (str) {

      return(str)
  },

  reverseWords: function (str) {
      let wordArr = str.split(" ")
      wordArr.forEach(elem=>{
        revArr.unshift(elem)
      })

      console.log(revArr)
      return wordArr
  }
};
var str = 'Foo bar baz quux';
CoolString.reverseAll(str)
CoolString.reverseWords(str);

//  elem.split("").forEach(letter=>{
//           elemArr.unshift(letter)
//         })
