import Piece from "../../classes/piece";
import User from "../../classes/user";
import * as readline from 'readline-sync';
import checkUserTurn from "./checkUserTurn";
import checkUserPieces from "./checkUserPieces";

function turn(gamePieces: Piece[], user: User, boardPieces: Piece[]) {
	console.clear();
	if (boardPieces.length === 0) {
		console.log('No one piece on the boeard yet');
	} else {
		console.log('Pieces on the boeard:');
		boardPieces.forEach((item) => console.log(`${item.numberOne}:${item.numberTwo}`));
	}
	let pieceNumber: number, direction: string, endOfTurn = true;
	do {
		do {
			console.log('Your pieces:');
			user.pieces.forEach((item, index) => console.log(`${index+1}) ${item.numberOne}:${item.numberTwo}`));
		} while (boardPieces.length > 0 && checkUserPieces(gamePieces, boardPieces, user));
		pieceNumber = readline.questionInt('choose the pice(type number): ');
		direction = readline.question('add rigth or left(type word): ');
		if (checkUserTurn(boardPieces, user.pieces[pieceNumber-1], direction)) {
			endOfTurn = false;
			user.pieces = user.pieces.filter((item, index) => index !== pieceNumber-1);
		}
	} while (endOfTurn);
}

export default turn;