import * as readline from 'readline-sync';
import User from '../../classes/user';

function initSecondUser(user: User):User {
	console.clear();
	console.log('Player2 by default');
	let response = readline.question('what is your name?: ');
	if (response === '' || response === user.name) response = 'Player2';
	return new User(response);
};

export default initSecondUser;