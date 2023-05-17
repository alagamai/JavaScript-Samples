function add(b, c) {
	return b + c;
}

function cons_fn(b, c) {
	this.sum = function () {
		return this.b + this.c;
	};
}

let sum = (b, c) => b + c;

let total = function (b, c) {
	return b + c;
};

((a, b) => {
	console.log(a + b);
})(20, 100);

console.log(add(2, 3));
console.log(sum(10, 20));
console.log(total(10, 60));

(function (b, c) {
	console.log(b + c);
})(12, 4);

let fn = new cons_fn();
fn.sum(4, 5);
