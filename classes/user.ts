import Piece from './piece';

class User {
	name: string;
	pieces: Piece[];

	constructor (name: string, pieces: Piece[]) {
		this.name = name;
		this.pieces = pieces;
	}
}

export default User;