import Piece from "../../classes/piece";
import User from "../../classes/user";
import * as readline from 'readline-sync';
import checkUserTurn from "./checkUserTurn";
import checkUserPieces from "./checkUserPieces";
import Pieces from "../../classes/pieces";
import checkCoincidences from "./checkСoincidences";

function turn(gamePieces: Pieces, user: User, boardPieces: Piece[]) {
	let pieceNumber: number, direction: string, endOfTurn = true, stringFormat: string;
	console.clear();
	
	do {
		do {
			console.clear();
			if (boardPieces.length === 0) {
				console.log('No one piece on the boeard yet');
			} else {
				console.log('Pieces on the board:');
				stringFormat = '';
				boardPieces.forEach((item) => stringFormat += `{${item.numberOne}:${item.numberTwo}} `);
				console.log(stringFormat);
			}
			console.log(`Turn of ${user.name}`);
			console.log(`The pieces left - ${gamePieces.getLength()}`);
			console.log('Your pieces:');
			user.pieces.forEach((item, index) => console.log(`${index+1}) ${item.numberOne}:${item.numberTwo}`));
		} while (boardPieces.length > 0 && checkUserPieces(gamePieces, boardPieces, user));

		if (boardPieces.length > 0 && (gamePieces.getLength() === 0) && checkCoincidences(boardPieces, user)) {
			readline.question('you cant do any move:( skip the turn');
			endOfTurn = false;
			break;
		}
		pieceNumber = readline.questionInt('choose the piece(type number): ');
		direction = readline.question('add rigth or left(type word): ');
		if (pieceNumber-1 >= user.pieces.length) {
			console.log('cant find that piece');
			readline.question('press enter to continue');
			console.clear();
		} else if (checkUserTurn(boardPieces, user.pieces[pieceNumber-1], direction)) {
			endOfTurn = false;
			user.pieces = user.pieces.filter((item, index) => index !== pieceNumber-1);
		}
	} while (endOfTurn);
}

export default turn;