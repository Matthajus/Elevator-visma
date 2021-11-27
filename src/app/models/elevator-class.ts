import {ElevatorDirectionEnum} from "./elevator-direction-enum";

export class ElevatorClass {

  currentFloor: number = 0;
  direction: ElevatorDirectionEnum = ElevatorDirectionEnum.MOVE_UP;
  moveQueue = Array<number>();

}
