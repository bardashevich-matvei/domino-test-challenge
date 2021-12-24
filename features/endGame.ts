import User from "../classes/user";
import * as readline from 'readline-sync';

function gameEnd (winner: User) {
	console.clear();
	console.log('We have a winner!!!');
	console.log(`It is ${winner.name}`);
	readline.question('press enter to continue');
}

export default gameEnd;