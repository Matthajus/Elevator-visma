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
    this.selectedFloors = this.selectedFloors.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    this.elevatorService.requestFloors(this.selectedFloors);
    this.elevatorService.run();
  }
}
