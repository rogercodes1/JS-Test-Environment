let revArr=[];

var CoolString = {
  reverseAll: function (str) {
    let wordArr = str.split(" ")
    wordArr.forEach(elem=>{
      let newWord="";
      for (let i = elem.length - 1; i >= 0; i--) {
        newWord +=elem[i]
      }
      revArr.unshift(newWord)
    })

    console.log(revArr.join(" "))
    return revArr.join(" ")
  },

  reverseWords: function (str) {

  }
};

function revStr(str) {
  return revStr(str.substr(1)) + str.charAt(0);
}
var str = 'Foo bar baz quux';
CoolString.reverseAll(str)
CoolString.reverseWords(str);

//  elem.split("").forEach(letter=>{
//           elemArr.unshift(letter)
//         })
