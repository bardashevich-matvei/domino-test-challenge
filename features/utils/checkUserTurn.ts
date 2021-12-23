import Piece from "../../classes/piece";
import swap from "./swap";

function checkUserTurn(boardPieces: Piece[], userPiece: Piece, direction: string):boolean {
	if (boardPieces.length === 0 ) {
		boardPieces.push(userPiece);
		return true;
	}
	switch (direction) {
		case 'left':
			if (userPiece.numberTwo === boardPieces[0].numberOne) {
				boardPieces.push(userPiece);
				return true;
			} else if (userPiece.numberOne === boardPieces[0].numberOne) {
				swap(userPiece.numberTwo, userPiece.numberOne);
				boardPieces.push(userPiece);
				return true;
			} else return false;
	
		case 'right':
			if (userPiece.numberOne === boardPieces[0].numberTwo) {
				boardPieces.push(userPiece);
				return true;
			} else if (userPiece.numberTwo === boardPieces[0].numberTwo) {
				swap(userPiece.numberTwo, userPiece.numberOne);
				boardPieces.push(userPiece);
				return true;
			} else return false;
	
		default:
			return false;
	}

}

export default checkUserTurn;