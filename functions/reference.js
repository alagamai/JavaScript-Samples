let person = {
	name: 'Tom',
	age: 20,
};

function referenceTest() {
	let newPerson = person;
	newPerson.age = 30;
	console.log(person);
}

referenceTest();
