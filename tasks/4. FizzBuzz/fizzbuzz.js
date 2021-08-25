export function getFizzBuzzUntil(n) {
  var a = [];
  var i = 1;
  while(i <= n) {
    if(i % 3 == 0 && i % 5 == 0) a.push("FizzBuzz");
    else if(i % 3 == 0) a.push("Fizz");
    else if(i % 5 == 0) a.push("Buzz");
    else a.push(i);
    i++
  }
  return a;
}