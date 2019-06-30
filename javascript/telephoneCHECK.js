
function phoneCheck(str) {
  let checkPar, checkLPar;

  if (str[0]!="1" && str[0]!="5" && str[0] != "("){return false}
  
  let digits = str.replace(/[\s-]/g, "")
  if ( digits.length < 10 || (/[^0-9()]/g).test(digits)){ return false}

  if (digits.includes("(") || digits.includes(")")){
    if (digits.indexOf("(") == -1 || digits.indexOf("(")+ 4 != digits.indexOf(")") ){ return false }
  }
  digits = digits.replace(/[^\d]/g, "")
  if (digits.length === 11 && digits[0]==1){
    return true
  }
  if (digits.length === 10 & digits[0] === "5"){
    return true
  }
  return false;
}
// Better alternate
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("-1 (757) 622-7382")
telephoneCheck("(555)555-5555")
telephoneCheck("(555)5(55?)-5555")
telephoneCheck("555)-555-5555")
