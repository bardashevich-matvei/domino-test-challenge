import User from "../classes/user";
import initPieces from "./utils/initPieces";
import swap from './utils/swap';
import piecesForUser from "./utils/piecesForUser";
import whoStarted from "./utils/whoStarted";
import Piece from "../classes/piece";
import Pieces from "../classes/pieces";

function startGame(firstUser: User, secondUser: User):Pieces {
	const gamePieces = initPieces();
	
	let clonePieces = piecesForUser(gamePieces, firstUser, []);
	clonePieces = piecesForUser(gamePieces, secondUser, clonePieces);
	
	if (whoStarted(firstUser, secondUser)) {
		swap(firstUser, secondUser);
	}

	return new Pieces(clonePieces);
};

export default startGame;