// @flow

import pokemon from '../data/pokemon.json'
import {
  EnabledGenerations,
  DisabledPokemon,
  PokemonTypes,
  EffectivenessMultipliers,
  EffectivenessTable,
  BestAttackers,
  BestDefenders,
} from './constants'
import type {Pokemon, ListOfPokemon} from './pokemon/types'

export const getAllPokemon = (): ListOfPokemon =>
  pokemon.filter(
    pokemon =>
      EnabledGenerations.indexOf(pokemon.gen) !== -1 &&
      DisabledPokemon.indexOf(pokemon.name) === -1,
  )

export const filterWeakAgainstPokemon = (
  pokemon: ListOfPokemon,
  defender: Pokemon,
): ListOfPokemon => {
  const result = []

  for (let i = 0, attacker, bestIndex, score; i < pokemon.length; i++) {
    attacker = pokemon[i]
    score = comparePokemon(attacker, defender)
    if (score > 1) {
      bestIndex = BestAttackers.indexOf(attacker.name)
      if (bestIndex !== -1) {
        score = +(BestAttackers.length - 1) - bestIndex
      }
      result.push({...attacker, score})
    }
  }

  return result
}

export const filterStrongAgainstPokemon = (
  pokemon: ListOfPokemon,
  attacker: Pokemon,
): ListOfPokemon => {
  const result = []

  for (let i = 0, defender, bestIndex, score; i < pokemon.length; i++) {
    defender = pokemon[i]
    score = comparePokemon(attacker, defender)
    if (score > 1) {
      bestIndex = BestDefenders.indexOf(defender.name)
      if (bestIndex !== -1) {
        score = +(BestDefenders.length - 1) - bestIndex
      }
      result.push({...defender, score})
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
