export class Plague {
  constructor(name, rate, vector, deathRate) {
    this.name = name;
    this.infectiousRate = rate;
    this.transmissionVector = vector;
    this.deathRate = deathRate;
  }
}
