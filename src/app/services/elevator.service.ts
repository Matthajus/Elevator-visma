import {Injectable} from '@angular/core';
import {ElevatorClass} from "../models/elevator-class";
import {ElevatorDirectionEnum} from "../models/elevator-direction-enum";
import {timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {

  elevator = new ElevatorClass();

  constructor() {  }

  run() {
    while (this.elevator.moveQueue.length !== 0) {
      this.visitFloor(this.elevator.moveQueue[0]);
    }

    if (this.elevator.currentFloor === 0) {
      this.elevator.direction = ElevatorDirectionEnum.MOVE_UP;
    } else {
      this.elevator.direction = ElevatorDirectionEnum.MOVE_DOWN;
    }
  }

  requestFloors(requestedFloors: Array<number>) {
    this.elevator.moveQueue = requestedFloors;
  }

  visitFloor(floor: number) {
    this.elevator.currentFloor = floor;
    console.log("Current floor is: " + floor);
    this.elevator.moveQueue.shift();
    timeout(3000);
  }

}
