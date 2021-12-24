import * as readline from 'readline-sync';
import User from '../../classes/user';

function initSecondUser():User {
	console.clear();
	console.log('Player2');
	let response = readline.question('what is your name?: ');
	return new User(response);
};

export default initSecondUser;