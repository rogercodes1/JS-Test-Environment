
let CoolString = {
  reverseAll: function (str) {
    let revArr=[];
    str.split(" ").forEach(elem=>{
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
    let revWordArr = []
    str.split(" ").forEach(str=>{
      let newWord="";
      for (let i = str.length - 1; i >= 0; i--) {
        newWord +=str[i]
      }
      revWordArr.push(newWord)
    })
    console.log(revWordArr.join(" "))
    return revWordArr.join(" ")
  }
};

let str = 'Foo bar baz quux';

CoolString.reverseAll(str)
CoolString.reverseWords(str);

//  elem.split("").forEach(letter=>{
//           elemArr.unshift(letter)
//         })
