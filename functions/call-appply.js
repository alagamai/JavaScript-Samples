num = [1, 4, 5];
const person = {
	firstName: 'Joh',
	lastName: 'Doe',
	fullname: function () {
		console.log(`${this.firstName} ${this.lastName}`);
	},
	sum: function (a, b, c) {
		return a + b + c;
	},
};

const emp1 = {
	firstName: 'first1',
	lastName: 'last1',
};

person.fullname();
person.fullname.call(emp1);
const total = person.fullname.apply(emp1);
const tot = person.sum.call(null, 1, 2, 3);
console.log(tot);
const tot1 = person.sum.apply(null, num);
console.log(tot1);
