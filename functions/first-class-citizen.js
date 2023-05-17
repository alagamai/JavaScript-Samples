function booker() {
	let counter = 2;

	return function secureBooking() {
		console.log(counter);
		counter++;
		console.log(`new counter ${counter}`);
	};
}

let newFunc = booker();
newFunc();

function func1(callback) {
	console.log('I am in callback1');
	let func2 = callback();
	func2();
}

func1(booker);
