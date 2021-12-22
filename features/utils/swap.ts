import User from "../../classes/user";

function swap(firstUser: User, secondUser: User) {
	const tmp = firstUser;
	firstUser = secondUser;
	secondUser = tmp;
}

export default swap;