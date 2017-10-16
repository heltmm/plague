export class Plague {
  constructor(name, rate, vector, deathRate) {
    this.name = name;
    this.infectiousRate = rate;
    this.transmissionVector = vector;
    this.deathRate = deathRate;
  }
  changeInfectiousRate(number){
    this.infectiousRate = (this.infectiousRate * number).toFixed(2);
  }
  changeDeathRate(number){
    this.deathRate = (this.deathRate * number).toFixed(2);
  }
}
