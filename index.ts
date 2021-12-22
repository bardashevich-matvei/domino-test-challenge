import User from './classes/user';
import menu from './features/menu';
import initFirstUser from './features/utils/initFirstUser';
import initSecondUser from './features/utils/initSecondUser';
import startGame from './features/startGame';
import endGame from './features/endGame';
import Piece from './classes/piece';
import game from './features/game';

let firstUser: User, secondUser: User, gamePieces:Piece[], gameOver = false, gameWinner: User;


while (gameOver) {
	switch(menu()) {
		case 1: 
			initFirstUser(firstUser);
			initSecondUser(secondUser);
			const gamePieces = startGame(firstUser, secondUser);
			gameWinner = game(firstUser, secondUser, gamePieces);
			endGame(gameWinner); 
			break;
		case 2:
			gameOver = true;
			break;
	};
};
