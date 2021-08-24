export function areParenthesesBalanced(inputString) {
  var o = 0;
  var c = 0;
  for(var i = 0; i < inputString.length; i++) {
    if(inputString.charAt(i) == "(") o++;
    if(inputString.charAt(i) == ")") c++;
  }
  return (o == c) ? true : false;
}