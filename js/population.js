export class Population{
  constructor(population) {
    this.healthy = population;
    this.infected = 1;
    this.dead = 0;
    this.quarantined = 0;
    this.interaction = 15;
    this.message = 'Patient zero has started your infection.'
  }

  dailyInfect(plague, cdc){
    setInterval(() => {
      this.deathToll(plague);
      this.infect(plague, cdc);
      plague.day++;
    } ,500);
  }
  infect(plague, cdc){
    let healthyToinfected = Math.floor(this.infected * this.interaction * plague.infectiousRate);
    if ((this.healthy - healthyToinfected ) > 0){
      this.healthy -= healthyToinfected;
      this.infected += healthyToinfected;

      cdc.quarantine(this);

    }else {
      let leftovers = this.healthy;
      this.healthy = 0;
      this.infected += leftovers;
    }
  }
  deathToll(plague){
    let almostDead = Math.floor(this.infected * plague.deathRate);
    let almostDeadQuarantined =  Math.floor(this.quarantined * plague.deathRate);
    let dead = Math.floor(Math.random() * almostDead);
    let deadQuarantined = Math.floor(Math.random() * almostDeadQuarantined);
    if (this.infected > 0) {
      this.infected -= dead;
      this.dead += dead;
      this.quarantined -=  deadQuarantined;
      this.dead += deadQuarantined;
    } else {
      this.infected = 0;
    }
  }
  quarantinedInfected(num){
    let q = Math.floor(this.infected * num);
    this.quarantined += q;
    this.infected -= q;
  }
}
