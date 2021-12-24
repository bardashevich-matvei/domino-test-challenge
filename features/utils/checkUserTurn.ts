import Piece from "../../classes/piece";
import swap from "./swap";
import * as readline from 'readline-sync';

function checkUserTurn(boardPieces: Piece[], userPiece: Piece, direction: string):boolean {
	if (boardPieces.length === 0 ) {
		boardPieces.push(userPiece);
		return true;
	}
	switch (direction) {
		case 'left':
			if (userPiece.numberTwo === boardPieces[0].numberOne) {
				boardPieces.unshift(userPiece);
				return true;
			} else if (userPiece.numberOne === boardPieces[0].numberOne) {
				userPiece.swap();
				boardPieces.unshift(userPiece);
				return true;
			} else {
				readline.question('You cant do that! try again(press enter)');
				console.clear();
				return false;
			}
	
		case 'right':
			if (userPiece.numberOne === boardPieces[boardPieces.length-1].numberTwo) {
				boardPieces.push(userPiece);
				return true;
			} else if (userPiece.numberTwo === boardPieces[boardPieces.length-1].numberTwo) {
				userPiece.swap();
				boardPieces.push(userPiece);
				return true;
			} else {
				readline.question('You cant do that! try again(press enter)');
				console.clear();
				return false;
			}
	
		default:
			readline.question('You cant do that! try again(press enter)');
			console.clear();
			return false;
	}

}

export default checkUserTurn;