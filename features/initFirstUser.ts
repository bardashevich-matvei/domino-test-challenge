import readline from 'readline-sync';
import User from '../classes/user';

function initFirstUser(user: User) {
	let response = readline.question('what is your name?: ');
	user = new User(response);
};

export default initFirstUser;