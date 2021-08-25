export function encryptCaesar(inputString, key) {
  var result = "";
  for(var i = 0; i < inputString.length; i++) {
    var char = inputString[i];
    if(char.match(/[a-z]/gi)) {
      var code = inputString.charCodeAt(i);
      if(code >= 65 && code <= 90) char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      else if(code >= 97 && code <= 122) char = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    result += char;
  }
  return result;
}