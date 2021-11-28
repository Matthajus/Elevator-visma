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

  clickOnGo() {
    this.selectedFloors = this.selectedFloors.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    this.elevatorService.requestFloors(this.selectedFloors);

    this.selectedFloors.forEach( id => {
      let span: HTMLElement | null = document.getElementById(String(id));
      // @ts-ignore
      span.style.border = "2px solid #040a29";
    })

    this.elevatorService.run();
  }

  clickOnSpan(span: HTMLSpanElement) {
    this.selectedFloors.push(Number(span.id));
    console.log(this.selectedFloors);

    // @ts-ignore
    span?.style.border = "1px solid greenyellow";
  }
}
