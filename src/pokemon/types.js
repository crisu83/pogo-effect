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

export type ListOfPokemonTypes = Array<PokemonType>

export type Pokemon = {
  dex: string,
  name: string,
  types: Array<PokemonTypeName>,
}

export type MapOfPokemon = {[key: string]: Pokemon}

export type ListOfPokemon = Array<Pokemon>

export type PokemonState = {
  byDex: MapOfPokemon,
  list: Array<string>,
}
