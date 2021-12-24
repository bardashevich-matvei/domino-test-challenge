import Piece from "../../classes/piece";
import User from "../../classes/user";
import getRandomIntInclusive from "./random";
import values from "../../constans/domino-values";
import NO_OWNER from "../../constans/piece-owner";

function piecesForUser(gamePieces: Piece[], user: User, clonePieces: Piece[]): Piece[] {
	let randomNumber: number;
	if (clonePieces.length === 0) {
		clonePieces = [...gamePieces];
	} 
	
	do {
		randomNumber = getRandomIntInclusive(0, clonePieces.length-1);
		user.pieces.push(clonePieces[randomNumber]);
		clonePieces = clonePieces.filter((item, index) => index !== randomNumber);
		
	} while (user.pieces.length < values.forEach);

	return clonePieces;
}

export default piecesForUser;