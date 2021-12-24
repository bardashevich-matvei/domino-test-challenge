import Piece from "../../classes/piece";
import User from "../../classes/user";

function checkCoincidences (boardPieces: Piece[], user: User):boolean {
	let leftPiece = boardPieces[0], rightPiece = boardPieces[boardPieces.length-1], userPieces = user.pieces;
	for (let current = 0; current < userPieces.length; current++) {
		if (userPieces[current].numberOne === leftPiece.numberOne ||
			userPieces[current].numberTwo === leftPiece.numberOne ||
			userPieces[current].numberOne === rightPiece.numberTwo ||
			userPieces[current].numberTwo === rightPiece.numberTwo) {
				return false;
			}
	};

	return true;
}

export default checkCoincidences;