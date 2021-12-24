import * as readline from 'readline-sync';
import User from '../../classes/user';

function initFirstUser():User {
	console.clear();
	console.log('Player1 by default');
	let response = readline.question('what is your name?: ');
	if (response = '') response = 'Player1'; 
	return new User(response);
};

export default initFirstUser;