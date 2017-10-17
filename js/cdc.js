export let CDC = {
  // parameter: undefined;


  quarantine: function(pop) {
    if(pop.infected > 1000000 ){
      pop.quarantinedInfected(.5);
      pop.interaction = 7;
      pop.message = 'The CDC has quarantined half the infected population.';
    }
  }

  cure: function(plague, pop) {

  }
}
