import {EventEmitter} from '@angular/core';

export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  c1 = new EventEmitter<number>();
  c2 = new EventEmitter<number>();

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    this.c1.emit(this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
    this.c2.emit(this.inactiveToActiveCounter);
  }
}
