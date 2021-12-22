import readline from 'readline-sync';

function menu(): number {
	console.log('1: start the game');
	console.log('2: exit');
	let response = readline.questionInt('what you choose?: ');
	return response;
};

export default menu;