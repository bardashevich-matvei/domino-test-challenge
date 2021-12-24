import User from "../classes/user";
import turn from "./utils/turn";
import checkGameOver from "./utils/checkGameOver";
import Piece from "../classes/piece";
import getGameWinner from "./utils/getGameWinner";
import Pieces from "../classes/pieces";

function game(firstUser: User, secondUser: User, gamePieces: Pieces): User {
	let gameOver = true;

	return continueGame(firstUser, secondUser, gamePieces, gameOver);
}

function continueGame(firstUser: User, secondUser: User, gamePieces: Pieces, gameOver: boolean):User {
	let boardPieces: Piece[];
	boardPieces = [];
	
	while (gameOver) {
		turn(gamePieces, firstUser, boardPieces);
		if (checkGameOver(firstUser, gamePieces)) {
			gameOver = false
			break;
		}
		turn(gamePieces, secondUser, boardPieces);
		if (checkGameOver(secondUser, gamePieces)) {
			gameOver = false
			break;
		}
	}
	return getGameWinner(firstUser, secondUser);
}

export default game;