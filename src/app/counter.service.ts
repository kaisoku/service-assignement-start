export class CounterService {
  activeTInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeTInactiveCounter++;
    console.log('Activate to Inactivate: ' + this.activeTInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactivate to Activate: ' + this.inactiveToActiveCounter);
  }
}
