import {Injectable} from '@angular/core';
import {ElevatorClass} from "../models/elevator-class";

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {

  elevator = new ElevatorClass();

  constructor() {  }

  run() {
    while (this.elevator.moveQueue.length !== 0) {
      let current = this.elevator.currentFloor;

      let closestFloor = this.elevator.moveQueue.reduce(function(prev, curr) {
        return (Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev);
      });

      this.move(closestFloor);
    }
  }

  requestFloors(requestedFloors: Array<number>) {
    this.elevator.moveQueue = requestedFloors;
  }

  move(floor: number) {
    this.elevator.currentFloor = floor;
    console.log("Current floor is: " + floor);
    this.elevator.moveQueue.forEach((element,index)=>{
      if(element === floor)  this.elevator.moveQueue.splice(index, 1);
    });
  }

}
