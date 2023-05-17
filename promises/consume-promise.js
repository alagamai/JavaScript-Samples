const countryData = function () {
	fetch('https://restcountries.com/v3.1/name/germany')
		.then(function (res) {
			//	console.log(res)
			return res.json();
		})
		.then(data => {
			//	console.log(data)
			//	console.log(data[0].name)
			//   if(data[0].borders[0])
			neighbour = data[0].borders[0];
			console.log(neighbour);
			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
		})
		.then(newP => newP.json())
		.then(newData => {
			console.log(newData);
			neighbour1 = newData[0].borders[0];
			console.log(neighbour1);
			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour1}`);
		})
		.then(newP1 => newP1.json())
		.then(newData1 => {
			console.log(newData1);
		})
		.catch(err => {
			throw err;
		});
};

countryData();
