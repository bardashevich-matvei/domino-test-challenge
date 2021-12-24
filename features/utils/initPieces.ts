import Piece from "../../classes/piece";
import values from "../../constans/domino-values";

function initPieces (): Piece[] {
	let counter = 0, secondCounter = 0, gamePieces = [];

	for (let current=0; current < values.atAll; current++) {
		gamePieces.push(new Piece(counter, secondCounter));
		secondCounter++;
		if (secondCounter > counter) {
			counter++;
			secondCounter = 0;
		}
	}

	return gamePieces;
}

export default initPieces;