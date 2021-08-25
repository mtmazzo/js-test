export function Reduce(array, reducer, initialValue) {
  for(var i = 0; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
}