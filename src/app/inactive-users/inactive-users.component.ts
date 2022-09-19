import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  times = 0;

  constructor(private userService: UserService, private counterServ: CounterService) {
    this.counterServ.c1.subscribe((value: number) => {
      this.times = value;
    });
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
    // this.times = this.counterServ.activeToInactiveCounter;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);

  }
}
