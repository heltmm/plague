export class Population{
  constructor() {
    this.healthy = 7e9 - 1;
    this.infected = 1;
    this.dead = 0;
    this.interaction = 15;
  }
  dailyInfect(plague){
    let that = this;
    setInterval(function(){
      that.deathToll(plague);
      that.infect(plague);
    } ,5000)
  }
  infect(plague){
    let infected = Math.floor(this.infected * this.interaction * plague.infectiousRate);
    this.healthy -= infected;
    this.infected += infected;
  }
  deathToll(plague){
    let almostDead = Math.floor(this.infected * plague.deathRate);
    let dead = Math.floor(Math.random() * almostDead);
    this.infected -= dead;
    this.dead += dead;
  }
}
