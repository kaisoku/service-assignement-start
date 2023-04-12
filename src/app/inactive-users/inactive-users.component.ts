import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users: string[];
  id: number;
  constructor(private userService: UserService) {
    this.userService.userSetToActive.subscribe((id: number) => (this.id = id));
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive() {
    this.userService.setToActive(this.id);
  }
}
