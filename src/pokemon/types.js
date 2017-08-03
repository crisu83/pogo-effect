// @flow

import type {Action} from '../types'

export type PokemonTypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

export type PokemonType = {
  index: number,
  name: PokemonTypeName,
  color: string,
}

export type ListOfPokemonTypeNames = Array<PokemonTypeName>

export type Pokemon = {
  dex: string,
  name: string,
  types: Array<PokemonTypeName>,
  ehp: number,
  dps: number,
  tdo: number,
  defEhp: number,
  defDps: number,
  defTdo: number,
}

export type MapOfPokemon = {[key: string]: Pokemon}

export type ListOfPokemon = Array<Pokemon>

export type PokemonState = {
  byDex: MapOfPokemon,
  list: Array<string>,
}

export type GetAllPokemonAction = Action<
  'POKEMON_GET_ALL',
  {
    entities: {
      pokemon: MapOfPokemon,
    },
    result: Array<string>,
  },
>
