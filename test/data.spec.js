global.window = global;
global.assert= require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');

const data = window.POKEMON.pokemon;


describe('pokemones', () => {

  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.pokemones, 'object');
  });

  describe('pokemones.pokeFilter', () => {

    it('debería ser una función', () => {
      window.assert.equal(typeof window.pokemones.pokeFilter, 'function');
    });

    it('Debería retornar Balbasaur como primer pokemon de tipo planta', () => {
      window.assert.equal(window.pokemones.pokeFilter(data, "Grass")[0].name, 'Bulbasaur');
    });

    it('Debería retornar Charmander como primer pokemon de tipo fuego', () => {
      window.assert.equal(window.pokemones.pokeFilter(data, "Fire")[0].name, 'Charmander');
    });

  });

  describe('pokemon.orderAZ', () => {
    it('Debería ser una función', () => {
      window.assert.equal(typeof window.pokemones.orderZA, 'function');
    });

    it('Debería retornar un arreglo con pokemones de la A a la Z', () => {
      window.assert.deepEqual([window.pokemones.orderAZ(data, "name", "az")[0].name, window.pokemones.orderAZ(data, "name", "az")[1].name, window.pokemones.orderAZ(data, "name", "az")[2].name, window.pokemones.orderAZ(data, "name", "az")[3].name], ['Abra', 'Aerodactyl', 'Alakazam', 'Arbok']);
    });
  });

describe('pokemon.orderZA', () => {
  it('Debería ser una función', () => {
    window.assert.equal(typeof window.pokemones.orderAZ, 'function');
  });

  it('Debería retornar un arreglo con pokemones de la Z a la A', () => {
    window.assert.deepEqual([window.pokemones.orderZA(data, "name", "za")[0].name, window.pokemones.orderZA(data, "name", "za")[1].name, window.pokemones.orderZA(data, "name", "za")[2].name, window.pokemones.orderZA(data, "name", "za")[3].name, window.pokemones.orderZA(data, "name", "za")[4].name]['Zubat', 'Zapdos', 'Wigglytuff', 'Weezing', 'Weepinbell']);
  });
});

describe('pokemon.computePokemon', () => {
      it('Debería ser una función', () => {
        window.assert.equal(typeof window.pokemones.computePokemon, 'function');
      });
      it('Debería retornar un 22% de pokemones de tipo Veneno', () => {
        window.assert.equal(window.pokemones.computePokemon(data, "Poison"),"22");
      });

});

describe('pokemon.pokeSearch', () => {
  it('Debería ser una función', () => {
    window.assert.equal(typeof window.pokemones.pokeSearch, 'function');
  });
  it('Debería retornar Pikachu si ingreso Pika', () => {
    window.assert.deepEqual(window.pokemones.pokeSearch(data, "pika")[0].name,"Pikachu");
  });

});

describe('pokemon.pokemonWeaknesses', () => {
  it('Debería ser una función', () => {
    window.assert.equal(typeof window.pokemones.pokemonWeaknesses, 'function');
  });
  it('Debería retornar 43 pokemones debiles al tipo Veneno', () => {
    window.assert.equal(window.pokemones.pokemonWeaknesses(data, "Rock"),"43");
  });

});



})
