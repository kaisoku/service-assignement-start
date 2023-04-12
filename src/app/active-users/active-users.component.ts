import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users: string[];
  id: number;
  constructor(private userService: UserService) {
    this.userService.userSetToInactive.subscribe(
      (id: number) => (this.id = id)
    );
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive() {
    this.userService.setToInactive(this.id);
  }
}
