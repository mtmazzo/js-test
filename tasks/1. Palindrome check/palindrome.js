function isPalindrome(inputString) {
export function isPalindrome(inputString) {
  var revString = inputString.split('').reverse().join('');
  return (inputString == revString) ? "true" : "false";
  return (inputString == revString) ? true : false;
}