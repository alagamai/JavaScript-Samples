function myCallback() {
	console.log('I am in myCallback');
}

function greet(name) {
	console.log('I am in greet function ' + name);
}

setTimeout(greet, 2000, 'Peter');
myCallback();

