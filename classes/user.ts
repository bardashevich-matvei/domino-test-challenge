import Piece from './piece';

class User {
	name: string;
	pieces: Piece[];
	hasNoMoves: boolean;

	constructor (name: string) {
		this.name = name;
		this.pieces = [];
		this.hasNoMoves = false;
	};

}

export default User;