function multiply(a, b = 2, c = 4) {
	return a * b * c;
}

let ans = multiply(10, undefined, 2);
console.log(ans);
