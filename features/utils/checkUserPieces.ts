import Piece from "../../classes/piece";
import User from "../../classes/user";
import addPieceInHand from "./addPieceInHand";

function checkUserPieces(gamePieces: Piece[], boardPieces: Piece[], user: User):boolean {
	let leftPiece = boardPieces[0], rightPiece = boardPieces[boardPieces.length], userPieces = user.pieces;
	userPieces.forEach((item, index) => {
		if (item.numberOne === leftPiece.numberOne ||
			item.numberTwo === leftPiece.numberTwo ||
			item.numberOne === rightPiece.numberOne ||
			item.numberTwo === rightPiece.numberTwo) return false;
	});
	addPieceInHand(user, gamePieces);
	return true;
}

export default checkUserPieces;