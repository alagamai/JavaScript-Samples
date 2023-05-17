function greeting(phrase = 'hello') {
	return function naming(name) {
		console.log(`${phrase} ${name}`);
	};
}

const greet1 =
	(phrase = 'hello') =>
	name =>
		`${phrase} ${name}`;

greetkey = greeting('Dear');
greetkey('JS team');
greeting()('cypress team');
func = greet1('hello hi');
console.log(func('John'));
console.log(greet1('hey')('everyone'));
console.log(greet1()('students'));
