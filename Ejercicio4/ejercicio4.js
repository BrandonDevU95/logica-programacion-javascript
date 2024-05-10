// Hacer un funcion que tome una palabra y la invierta sin usar metodos propios de js

function invertirPalabras(texto) {
	let invertido = '';

	for (let letra of texto) {
		invertido = letra + invertido;
	}

	console.log(invertido);
}

invertirPalabras('Hola');
