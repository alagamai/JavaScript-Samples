//race : resolves or rejects as soon as the first promise settles

const BULBASAUR_POKEMONS_URL = 'https://pokeaperrr.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapierr.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

function getPromise(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(resp => {
				console.log('I am in resp block');
				return resp.json();
			})
			.then(data => {
				resolve(data);
			})
			.catch(error => {
				reject(error);
			});
	});
}
let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.race([promise_1, promise_2, promise_3])
	.then(result => {
		console.log({ result });
	})
	.catch(error => {
		console.log('An Error Occured');
	});
