import User from "../classes/user";
import initPieces from "./initPieces";

function startGame(firstUser: User, secondUser: User) {
	const gamePieces = initPieces();
};

export default startGame;