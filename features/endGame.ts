import User from "../classes/user";
import readline from 'readline-sync';

function gameEnd (winner: User) {
	console.clear();
	console.log('We have a winner!!!');
	console.log(`It is ${winner.name}`);
}

export default gameEnd;