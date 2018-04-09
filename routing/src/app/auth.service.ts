
export class AuthService {
	authorized = true;

	login() {
		this.authorized = true;
	}

	logout() {
		this.authorized = false;
	}

	isAuthorized() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.authorized);
			}, 800)
		})
	}
}