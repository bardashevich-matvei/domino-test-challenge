import * as readline from 'readline-sync';
import User from '../../classes/user';

function initFirstUser():User {
	console.clear();
	console.log('Player1');
	let response = readline.question('what is your name?: ');
	return new User(response);
};

export default initFirstUser;