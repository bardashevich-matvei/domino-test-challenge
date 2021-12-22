import User from "../classes/user";
import initPieces from "./utils/initPieces";
import swap from './utils/swap';
import piecesForUser from "./utils/piecesForUser";
import whoStarted from "./utils/whoStarted";
import Piece from "../classes/piece";

function startGame(firstUser: User, secondUser: User):Piece[] {
	const gamePieces = initPieces();
	
	piecesForUser(gamePieces, firstUser);
	piecesForUser(gamePieces, secondUser);
	if (whoStarted(firstUser, secondUser)) {
		swap(firstUser, secondUser);
	}

	return gamePieces;
};

export default startGame;