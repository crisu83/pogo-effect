// @flow

import pokemon from '../data/pokemon.json'
import {
  EnabledGenerations,
  PokemonTypes,
  EffectivenessMultipliers,
  EffectivenessTable,
} from './constants'
import type {Pokemon, ListOfPokemon} from './pokemon/types'

export const getAllPokemon = () =>
  pokemon.filter(pokemon => EnabledGenerations.indexOf(pokemon.gen) !== -1)

export const filterWeakAgainstPokemon = (
  pokemon: ListOfPokemon,
  defender: Pokemon,
): ListOfPokemon => {
  const result = []

  for (let i = 0, score; i < pokemon.length; i++) {
    score = comparePokemon(pokemon[i], defender)
    if (score > 1) {
      result.push({...pokemon[i], score})
    }
  }

  return result
}

export const filterStrongAgainstPokemon = (
  pokemon: ListOfPokemon,
  attacker: Pokemon,
): ListOfPokemon => {
  const result = []

  for (let i = 0, score; i < pokemon.length; i++) {
    score = comparePokemon(attacker, pokemon[i])
    if (score > 1) {
      result.push({...pokemon[i], score})
    }
  }

  return result
}

export const comparePokemon = (
  attacker: Pokemon,
  defender: Pokemon,
): number => {
  let score = 1

  for (let i = 0, attackerTypeIndex; i < attacker.types.length; i++) {
    attackerTypeIndex = PokemonTypes.indexOf(attacker.types[i])
    for (
      let j = 0, defenderTypeIndex, effectiveness;
      j < defender.types.length;
      j++
    ) {
      defenderTypeIndex = PokemonTypes.indexOf(defender.types[j])
      effectiveness = EffectivenessTable[attackerTypeIndex][defenderTypeIndex]
      score *= EffectivenessMultipliers[effectiveness]
    }
  }

  return score
}
