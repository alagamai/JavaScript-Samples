const result = (function () {
	const x = 10;
	const y = 20;
	return x + y;
})();
console.log(result);

(function () {
	console.log('I am anonymous');
})();
