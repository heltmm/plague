export class Population{
  constructor(population) {
    this.healthy = population;
    this.infected = 1;
    this.dead = 0;
    this.quarantined = 0;
    this.interaction = 15;
  }

  dailyInfect(plague, cdc){
    setInterval(() => {
      this.healthy = Math.floor(this.healthy * 1.000011);
      this.deathToll(plague);
      if(this.infected > 0  && this.quarantined >= 0){
        this.infect(plague, cdc);
      }
      plague.day++;
      if (cdc.daysToCure) {
        cdc.daysToCure--;
      }
    } ,500);
  }
  infect(plague, cdc){
    let healthyToinfected = Math.floor(this.infected * this.interaction * plague.infectiousRate);
    if ((this.healthy - healthyToinfected ) > 0){
      this.healthy -= healthyToinfected;
      this.infected += healthyToinfected;

      cdc.quarantine(this);
      cdc.cure(plague, this);

    }else {
      let leftovers = this.healthy;
      this.healthy = 0;
      this.infected += leftovers;
      cdc.message = 'Society has collapsed into chaos. No one\'s having babies.';
    }
  }
  deathToll(plague){
    let almostDead = Math.floor(this.infected * plague.deathRate);
    let almostDeadQuarantined =  Math.floor(this.quarantined * plague.deathRate);
    let dead = Math.floor(Math.random() * almostDead);
    let deadQuarantined = Math.floor(Math.random() * almostDeadQuarantined);
    if ((this.infected - dead) >= 0) {
      this.infected -= dead;
      this.dead += dead;

    }else {
      let leftoversI = this.infected;
      this.infected = 0;
      this.dead += leftoversI;
    }
    if ((this.quarantined - deadQuarantined) >= 0){
      this.quarantined -=  deadQuarantined;
      this.dead += deadQuarantined;
    } else {
      let lefoversQ = this.quarantined;
      this.quaratined = 0;
      this.dead += leftoversQ;
    }

  }
  quarantinedInfected(num){
    let q = Math.floor(this.infected * num);
    this.quarantined += q;
    this.infected -= q;
  }
}
