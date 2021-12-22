import readline from 'readline-sync';
import User from './classes/user';
import menu from './features/menu';
import initFirstUser from './features/initFirstUser';
import initSecondUser from './features/initSecondUser';
import startGame from './features/startGame';

let firstUser: User, secondUser: User, gameOver = false;


while (gameOver) {
	switch(menu()) {
		case 1: 
			initFirstUser(firstUser);
			initSecondUser(secondUser);
			startGame(firstUser, secondUser); 
			break;
		case 2:
			gameOver = true;
			break;
	};
};
