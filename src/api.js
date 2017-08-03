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

export const findAllPokemon = (): ListOfPokemon =>
  pokemon.filter(
    pokemon =>
      EnabledGenerations.indexOf(pokemon.gen) !== -1 &&
      DisabledPokemon.indexOf(pokemon.name) === -1,
  )

export const filterPokemon = (
  listOfPokemon: ListOfPokemon,
  pokemon: Pokemon,
  effectivenessExtractor: (pokemon: Pokemon, other: Pokemon) => number,
  ratingExtractor: (pokemon: Pokemon, other: Pokemon) => number,
): ListOfPokemon => {
  const result = []

  for (let i = 0, other, effectiveness, score; i < listOfPokemon.length; i++) {
    other = listOfPokemon[i]
    effectiveness = effectivenessExtractor(pokemon, other)
    if (effectiveness > 1) {
      score = effectiveness * ratingExtractor(pokemon, other)
      result.push({...other, score})
    }
  }

  console.log('result', result)

  return result
}

export const calculatePokemonEffectiveness = (
  attacker: Pokemon,
  defender: Pokemon,
): number => {
  let result = 1

  for (let i = 0, attackerTypeIndex; i < attacker.types.length; i++) {
    attackerTypeIndex = PokemonTypes.indexOf(attacker.types[i])
    for (
      let j = 0, defenderTypeIndex, effectiveness;
      j < defender.types.length;
      j++
    ) {
      defenderTypeIndex = PokemonTypes.indexOf(defender.types[j])
      effectiveness = EffectivenessTable[attackerTypeIndex][defenderTypeIndex]
      result *= EffectivenessMultipliers[effectiveness]
    }
  }

  return result
}

export const calculatePokemonRating = (
  attacker: Pokemon,
  defender: Pokemon,
): number =>
  calculatePokemonAttackRating(attacker) /
  calculatePokemonDefenseRating(defender)

export const calculatePokemonAttackRating = (pokemon: Pokemon) =>
  pokemon.ehp * pokemon.dps * pokemon.tdo / 3

export const calculatePokemonDefenseRating = (pokemon: Pokemon) =>
  pokemon.defEhp * pokemon.defDps * pokemon.defTdo / 3

export const filterWeakAgainstPokemon = (
  listOfPokemon: ListOfPokemon,
  pokemon: Pokemon,
): ListOfPokemon =>
  filterPokemon(
    listOfPokemon,
    pokemon,
    (pokemon, other) => calculatePokemonEffectiveness(other, pokemon),
    (pokemon, other) => calculatePokemonRating(other, pokemon),
  )

export const filterStrongAgainstPokemon = (
  listOfPokemon: ListOfPokemon,
  pokemon: Pokemon,
): ListOfPokemon =>
  filterPokemon(
    listOfPokemon,
    pokemon,
    (pokemon, other) => calculatePokemonEffectiveness(pokemon, other),
    (pokemon, other) => calculatePokemonRating(other, pokemon),
  )
