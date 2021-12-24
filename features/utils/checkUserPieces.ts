import Piece from "../../classes/piece";
import User from "../../classes/user";
import addPieceInHand from "./addPieceInHand";
import * as readline from 'readline-sync';
import Pieces from "../../classes/pieces";
import checkCoincidences from "./checkСoincidences";

function checkUserPieces(gamePieces: Pieces, boardPieces: Piece[], user: User):boolean {
	const check = checkCoincidences(boardPieces, user);
	if (!check) {
		return false;
	} else if (gamePieces.getLength()) {
		readline.question('You cant add any piece! take one(press enter)');
		addPieceInHand(user, gamePieces);
		return true;
	} else {
		return false;
	}
}

export default checkUserPieces;