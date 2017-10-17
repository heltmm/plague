export class CDC {
  constructor() {
    this.message = "Patient zero has started your infection.";
  }


  quarantine(pop) {
    if(pop.infected > 1000000 ){
      pop.quarantinedInfected(0.3);
      pop.interaction = 11;
      this.message = 'The CDC has quarantined a third of the infected population.';
    }
  }

  cure(plague, population) {
    if (plague.deathRate >= 0.14 || population.dead >= 1000000) {
      plague.infectiousRate *= 0.99;
      this.message = 'The CDC has begun research on a cure.'
    }
  }
};
