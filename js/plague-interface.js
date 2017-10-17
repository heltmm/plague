import { Plague } from './../js/plague.js';
import { Population } from './../js/population.js';
import { CDC } from './../js/cdc.js';

$(document).ready(function() {
  let religion = new Plague('Religion', 0.1, 'Air Born', 0.1);
  let population = new Population(7e9-1);
  let cdc = new CDC();

  population.dailyInfect(religion, cdc);

  let numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  $('#increaseInfectiousRate').click(function(){
    religion.changeInfectiousRate(1.1);
  });

  $('#decreaseInfectiousRate').click(function(){
    religion.changeInfectiousRate(0.9);
  });

  $('#increaseDeathRate').click(function(){
    religion.changeDeathRate(1.1);
  });

  $('#decreaseDeathRate').click(function(){
    religion.changeDeathRate(0.9);
  });



  setInterval(function(){
    $('#healthyPop').html(`<h1>Current Healthy Pop: ${numberWithCommas(population.healthy)}</h1>`);
    $('#infectedPop').html(`<h1>Current Infected Pop: ${numberWithCommas(population.infected)}</h1>`);
    $('#quarantinedPop').html(`<h1>Current Quarantined Pop: ${numberWithCommas(population.quarantined)}</h1>`);
    $('#deadPop').html(`<h1>Current Dead Pop: ${numberWithCommas(population.dead)}</h1>`);
    $('#infectiousRate').html(`<h1>Current Infectious Rate: ${religion.infectiousRate}</h1>`);
    $('#deathRate').html(`<h1>Current Death Rate: ${religion.deathRate}</h1>`);
    $('#plagueDay').html(`<h1>Plague Days: ${religion.day}</h1>`);
    $('#cureDays').html(`<h1>Days To Cure: ${cdc.daysToCure}</h1>`);
    $('#cdc-message').html(`<h1>${cdc.message}</h1>`);
  }, 500);
});
