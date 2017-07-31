import pokemon from './data/pokemon.json';

import { PokemonTypes, EffectivenessMultipliers, EffectivenessTable } from './constants';

export const getAllPokemon = () => pokemon;

export const getWeakAgainstPokemon = (pokemon, defender) => {
  const result = [];
  
  for (let i = 0, score; i < pokemon.length; i++) {
    score = comparePokemon(pokemon[i], defender);
    if (score > 1) {
      result.push({ ...pokemon[i], score });
    }
  }

  return result;
};

export const getStrongAgainstPokemon = (pokemon, attacker) => {
  const result = [];

  for (let i = 0, score; i < pokemon.length; i++) {
    score = comparePokemon(attacker, pokemon[i]);
    if (score > 1) {
      result.push({ ...pokemon[i], score });
    }
  }

  return result;
};

export const comparePokemon = (attacker, defender) => {
  let score = 1;
  
  for (let i = 0, attackerTypeIndex; i < attacker.types.length; i++) {
    attackerTypeIndex = PokemonTypes.indexOf(attacker.types[i]);
    for (let j = 0, defenderTypeIndex; j < defender.types.length; j++) {
      defenderTypeIndex = PokemonTypes.indexOf(defender.types[j]);
      score *= EffectivenessMultipliers[EffectivenessTable[attackerTypeIndex][defenderTypeIndex]];
    }
  }
  
  return score;
};
