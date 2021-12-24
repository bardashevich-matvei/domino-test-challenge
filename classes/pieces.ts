import Piece from "./piece";

class Pieces extends Array {
	pieces: Piece[];

	constructor (pieces: Piece[]) {
		super();
		this.pieces = pieces;
	}

	deleteOne(index: number) {
		this.pieces = this.pieces.filter((item, i) => index !== i);
	}

	getLength() {
		return this.pieces.length;
	}
}

export default Pieces;