import User from "../classes/user";
import turn from "./utils/turn";
import checkGameOver from "./utils/checkGameOver";
import Piece from "../classes/piece";

function game(firstUser: User, secondUser: User, gamePieces: Piece[]): User {
	let gameOver = true;

	return continueGame(firstUser, secondUser, gamePieces, gameOver);
}

function continueGame(firstUser: User, secondUser: User, gamePieces: Piece[], gameOver: boolean):User {
	while (gameOver) {
		turn(gamePieces, firstUser);
		turn(gamePieces, secondUser);
		checkGameOver(firstUser, secondUser, gamePieces, gameOver);
	}
	return checkGameOver(firstUser, secondUser, gamePieces, gameOver);
}

export default game;