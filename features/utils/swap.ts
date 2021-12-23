import User from "../../classes/user";

function swap(item1: any, item2: any) {
	const tmp = item1;
	item1 = item2;
	item2 = tmp;
}

export default swap;