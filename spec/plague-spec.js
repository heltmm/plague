import { Plague } from './../js/plague.js';
import { Population } from './../js/population.js';

describe('Plague', function() {
  let religion;
  let population;

  beforeEach(function() {
    religion = new Plague('Religion', 0.1, 'Air Born', 0.1);
    population = new Population();
    jasmine.clock().install();
    population.dailyInfect(religion);
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  // it('should infect a percent of population based on infectiousRate', function() {
  //   population.infect(religion);
  //   expect(population.infected).toEqual(2);
  // });
  //
  // it('should infect population at set interval', function() {
  //   jasmine.clock().tick(5001);
  //   expect(population.infected).toEqual(2);
  // });
  //
  // it('should infect population at set interval', function() {
  //   jasmine.clock().tick(20001);
  //   expect(population.infected).toEqual(30);
  // });
  it('should kill population at set interval', function() {
    jasmine.clock().tick(30001);
    expect(population.dead).toBeWithinRange(0, 8);
  });
  // it('will change infectiousRate by given amount', function() {
  //   religion.changeInfectiousRate(1.1)
  //   expect(religion.infectiousRate).toEqual('0.11')
  // });
  // it('will change deathRate by given amount', function() {
  //   religion.changeDeathRate(1.1)
  //   expect(religion.deathRate).toEqual('0.11')
  // });
});
