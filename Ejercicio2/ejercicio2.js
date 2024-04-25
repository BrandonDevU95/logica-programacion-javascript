// const palindromo = (text) => {
//     let arrayReverse = []
//     for (let i = 0; i < text.length; i++) {
//         arrayReverse.push(text[i]);
//     }
//     const textReverse = arrayReverse.reverse().join('');
//     return textReverse === text ? true : false
// }

// console.log(palindromo('otto'))

const palindromo = (text) => {
	const textReverse = text.split('').reverse().join('');
	return textReverse === text ? true : false;
};
console.log(palindromo('otto'));
console.log(palindromo('brandon'));