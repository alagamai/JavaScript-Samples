function myDisplayer(somedata) {
	console.log(somedata);
}

let myPromise = new Promise(function (resolve, reject) {
	let x = 5;

	if ((x = 0)) resolve('OK');
	else reject('err');
});

/*
myPromise.then(
   // success callback
   function(value) {myDisplayer(value)    },
   // error callback
   function(error) {myDisplayer(error) }
)
*/

myPromise.then(
	val => myDisplayer(val),
	err => myDisplayer(err)
);
