import Piece from "../../classes/piece";
import Pieces from "../../classes/pieces";
import User from "../../classes/user";

function checkGameOver(user: User, gamePieces: Pieces):boolean {
	if (user.pieces.length === 0 && gamePieces.getLength() === 0) {
		return true;
	} else return false;
}

export default checkGameOver;