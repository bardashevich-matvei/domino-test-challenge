import Piece from "../../classes/piece";
import User from "../../classes/user";
import getRandomIntInclusive from "./random";

function addPieceInHand(user: User, gamePieces: Piece[]) {
	const randomPiece = getRandomIntInclusive(0, gamePieces.length);
	user.pieces.push(gamePieces[randomPiece]);
	gamePieces = gamePieces.filter((item, index) => index !== randomPiece);
}

export default addPieceInHand;