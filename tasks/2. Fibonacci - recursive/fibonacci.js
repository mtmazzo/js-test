export function getFibonacciUntil(n) {
  if(n <= 1) return [0,1];
  var a = getFibonacciUntil(n - 1);
  a.push(a[a.length - 1] + a[a.length - 2]);
  return a;
}