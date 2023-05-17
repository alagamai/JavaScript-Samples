function display(res) {
	document.getElementById('myDiv').innerHTML = res;
}

function sum1(a, b) {
	let c = a + b;
}
let ans = sum1(2, 10);
display(ans);

function sum(a, b, callback) {
	let c = a + b;
	callback(c);
}

//sum(2, 10, display);
