import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  active:string[];
  inactive:string[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.active = this.userService.getActiveUsers();
    this.inactive = this.userService.getInactiveUsers();
    this.userService.usersUpdated.subscribe(
      () => {
        this.active = this.userService.getActiveUsers();
        this.inactive = this.userService.getInactiveUsers();
    });
  }
}
