import { delay, of } from "rxjs";
import Users from "../_mock/_dataUser.json";

class UserService {
	private DataUsers = Users;

	findUserByUsername = (username: string) => {
		return of(
			this.DataUsers.find((user) => user.username === "" + username)
		).pipe(delay(1000));
	};
}

export default UserService;
