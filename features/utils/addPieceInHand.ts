import Piece from "../../classes/piece";
import Pieces from "../../classes/pieces";
import User from "../../classes/user";
import getRandomIntInclusive from "./random";

function addPieceInHand(user: User, gamePieces: Pieces) {
	const randomPiece = getRandomIntInclusive(0, gamePieces.length);
	user.addPiece(gamePieces.pieces[randomPiece]);
	gamePieces.deleteOne(randomPiece);
}

export default addPieceInHand;