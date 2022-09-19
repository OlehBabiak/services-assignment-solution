import {Component, OnInit} from '@angular/core';

import {UserService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  times = 0;

  constructor(private userService: UserService, private counterServ: CounterService) {
    this.counterServ.c2.subscribe((value: number) => {
      this.times = value;
    });
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
    // this.times = this.counterServ.inactiveToActiveCounter;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);

  }
}
