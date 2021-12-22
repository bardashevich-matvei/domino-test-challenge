import User from "../classes/user";
import turn from "./utils/turn";
import checkGameOver from "./utils/checkGameOver";

function game(firstUser: User, secondUser: User, gamePieces): User {
	let gameOver = false, result: User;

	while (gameOver) {
		turn(gamePieces, firstUser);
		turn(gamePieces, secondUser);
		result = checkGameOver(firstUser, secondUser, gamePieces, gameOver);
	}

	return result;
}

export default game;