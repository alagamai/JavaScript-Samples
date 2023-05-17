arr = [1, 3, 5, 7, 9, 11, 13, 15];

console.log(arr.splice(3, 2));
console.log(arr);

console.log(arr.splice(4, 0, 'e1', 'e2', 'succ'));
console.log(arr);

console.log(arr.splice(5, 1, 'new'));
console.log(arr);
