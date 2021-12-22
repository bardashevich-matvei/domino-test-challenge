import NO_OWNER from "../constans/piece-owner";

class Piece {
	numberOne: number;
	numberTwo: number;
	owner: string;

	constructor (first: number, second: number, owner: string) {
		this.numberOne = first;
		this.numberTwo = second;
		this.owner = owner ? owner : NO_OWNER;
	}
}

export default Piece;