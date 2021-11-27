import {ElevatorDirectionEnum} from "./elevator-direction-enum";

export class ElevatorClass {

  currentFloor?: number;
  direction?: ElevatorDirectionEnum;
  moveUpQueue?: number[];
  moveDownQueue?: number[];

}
