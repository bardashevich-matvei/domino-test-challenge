import NO_OWNER from "../constans/piece-owner";

class Piece {
	numberOne: number;
	numberTwo: number;
	owner: string;

	constructor (first: number, second: number) {
		this.numberOne = first;
		this.numberTwo = second;
		this.owner = NO_OWNER;
	};

	swap () {
		const tmp = this.numberOne;
		this.numberOne = this.numberTwo;
		this.numberTwo = tmp; 
	}
}

export default Piece;