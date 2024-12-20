function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0

//Alternative solution using typeof
function foo2(x){
  if (typeof x === 'undefined' || x === null){
    return 0; 
  }
  return x + 1;
}
console.log(foo2(null)); // Output: 0
console.log(foo2(undefined)); // Output: 0