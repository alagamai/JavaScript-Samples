function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.getFullName = function () {
		return this.firstName + ' ' + this.lastName;
	};
}

var person1 = new Person('John', 'Doe');
console.log(person1.getFullName()); // output: "John Doe"
