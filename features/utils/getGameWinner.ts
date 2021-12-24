import User from "../../classes/user";

function getGameWinner(firstUser: User, secondUser: User):User {
	if (firstUser.pieces.length === 0) {
		return firstUser;
	} else return secondUser;
}

export default getGameWinner;