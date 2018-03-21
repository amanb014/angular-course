import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

	activeUsers = ['Anna'];
	inactiveUsers = ['Max', 'Chris', 'Manu'];

	usersUpdated:EventEmitter<null> = new EventEmitter<null>();
	
	setActiveInactive(active:string[], inactive:string[]) {
		this.activeUsers = active;
		this.inactiveUsers = inactive;
		this.usersUpdated.emit();
	}

	setToInactive(index:number) {
		let user:string = this.activeUsers.splice(index, 1)[0];
		this.inactiveUsers.push(user);
		this.usersUpdated.emit();
	}

	setToActive(index:number) {
		let user:string = this.inactiveUsers.splice(index, 1)[0];
		this.activeUsers.push(user);
		this.usersUpdated.emit();
	}

	getActiveUsers() {
		return this.activeUsers;
	}

	getInactiveUsers() {
		return this.inactiveUsers;
	}

}