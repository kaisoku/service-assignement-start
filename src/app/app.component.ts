import { Component } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.userSetToActive.emit(id);
  }

  onSetToActive(id: number) {
    this.userService.userSetToInactive.emit(id);
  }
}
