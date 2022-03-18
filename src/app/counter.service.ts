export class CounterService {
  ActiveToInactiveCounter = 0;
  InactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.ActiveToInactiveCounter++;
    console.log("active counter: " + this.ActiveToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.InactiveToActiveCounter++;
    console.log("Inactive counter: " + this.InactiveToActiveCounter);
  }
}
