import {Component, OnInit} from '@angular/core';
import {ElevatorService} from "../../services/elevator.service";

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css']
})
export class ElevatorComponent implements OnInit {

  selectedFloors = Array<number>();

  elevatorService: ElevatorService;

  constructor(elevatorService: ElevatorService) {
    this.elevatorService = elevatorService;
  }

  ngOnInit(): void {
    console.log("Current floor: ", this.elevatorService.elevator.currentFloor);
  }


  clickOnButton(button: HTMLButtonElement) {
    this.selectedFloors.push(Number(button.id));
    console.log(this.selectedFloors);
  }


  clickOnGo() {
    if (this.elevatorService.elevator.direction === "MOVE_UP") {
      this.selectedFloors = this.selectedFloors.sort((n1,n2) => n1 - n2);
    } else {
      this.selectedFloors = this.selectedFloors.sort((n1,n2) => n2 - n1);
    }

    this.selectedFloors = this.selectedFloors.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    this.elevatorService.requestFloors(this.selectedFloors);
    this.elevatorService.run();
  }
}
