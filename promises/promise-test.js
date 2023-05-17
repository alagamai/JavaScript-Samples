const dataPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');

if (dataPromise instanceof Promise) {
	console.log('fetch returns a Promise');
} else {
	console.log('fetch does not return a Promise');
}

dataPromise
	.then(res => {
		console.log(res);
		return res.json();
	})
	.then(data => console.log(data));
