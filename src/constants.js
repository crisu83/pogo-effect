import { PropTypes } from 'react';
import { Schema, arrayOf } from 'normalizr';

export const TypeNames = {
  NORMAL: 'normal',
  FIRE: 'fire',
  WATER: 'water',
  ELECTRIC: 'electric',
  GRASS: 'grass',
  ICE: 'ice',
  FIGHTING: 'fighting',
  POISON: 'poison',
  GROUND: 'ground',
  FLYING: 'flying',
  PSYCHIC: 'psychic',
  BUG: 'bug',
  ROCK: 'rock',
  GHOST: 'ghost',
  DRAGON: 'dragon',
  DARK: 'dark',
  STEEL: 'steel',
  FAIRY: 'fairy'
};

export const PokemonTypes = [
  TypeNames.NORMAL,
  TypeNames.FIGHTING,
  TypeNames.FLYING,
  TypeNames.POISON,
  TypeNames.GROUND,
  TypeNames.ROCK,
  TypeNames.BUG,
  TypeNames.GHOST,
  TypeNames.STEEL,
  TypeNames.FIRE,
  TypeNames.WATER,
  TypeNames.GRASS,
  TypeNames.ELECTRIC,
  TypeNames.PSYCHIC,
  TypeNames.ICE,
  TypeNames.DRAGON,
  TypeNames.DARK,
  TypeNames.FAIRY
];

// export const PokemonTypes = [
//   TypeNames.NORMAL,
//   TypeNames.FIRE,
//   TypeNames.WATER,
//   TypeNames.ELECTRIC,
//   TypeNames.GRASS,
//   TypeNames.ICE,
//   TypeNames.FIGHTING,
//   TypeNames.POISON,
//   TypeNames.GROUND,
//   TypeNames.FLYING,
//   TypeNames.PSYCHIC,
//   TypeNames.BUG,
//   TypeNames.ROCK,
//   TypeNames.GHOST,
//   TypeNames.DRAGON,
//   // TypeNames.DARK,
//   TypeNames.STEEL,
//   TypeNames.FAIRY
// ];

export const TypeColors = {
  [TypeNames.NORMAL]: '#ccd6c5',
  [TypeNames.FIRE]: '#ff6915',
  [TypeNames.WATER]: '#5cd1ff',
  [TypeNames.ELECTRIC]: '#ffd140',
  [TypeNames.GRASS]: '#6fd161',
  [TypeNames.ICE]: '#7ddbc9',
  [TypeNames.FIGHTING]: '#b53c5c',
  [TypeNames.POISON]: '#c852dd',
  [TypeNames.GROUND]: '#ce996e',
  [TypeNames.FLYING]: '#bb9fff',
  [TypeNames.PSYCHIC]: '#ef4dc1',
  [TypeNames.BUG]: '#a9ba47',
  [TypeNames.ROCK]: '#7c7762',
  [TypeNames.GHOST]: '#685f89',
  [TypeNames.DRAGON]: '#4a42ba',
  [TypeNames.DARK]: '#464649',
  [TypeNames.STEEL]: '#b3c2ce',
  [TypeNames.FAIRY]: '#ffa1d0'
};

const EffectivenessTypes = {
  NOT_VERY_EFFECTIVE: 0,
  NORMAL: 1,
  SUPER_EFFECTIVE: 2
};

export const EffectivenessTable = [
  [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // normal
  [2, 1, 0, 0, 1, 2, 0, 0, 2, 1, 1, 1, 1, 0, 2, 1, 2, 0], // fighting
  [1, 2, 1, 1, 1, 0, 2, 1, 0, 1, 1, 2, 0, 1, 1, 1, 1, 1], // flying
  [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2], // poison
  [1, 1, 0, 2, 1, 2, 0, 1, 2, 2, 1, 0, 2, 1, 1, 1, 1, 1], // ground
  [1, 0, 2, 1, 0, 1, 2, 1, 0, 2, 1, 1, 1, 1, 2, 1, 1, 1], // rock
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 1, 2, 1, 1, 2, 0], // bug
  [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1], // ghost
  [1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 1, 0, 1, 2, 1, 1, 2], // steel
  [1, 1, 1, 1, 1, 0, 2, 1, 2, 0, 0, 2, 1, 1, 2, 0, 1, 1], // fire
  [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0, 0, 1, 1, 1, 0, 1, 1], // water
  [1, 1, 0, 0, 2, 2, 0, 1, 0, 0, 2, 0, 1, 1, 1, 0, 1, 1], // grass
  [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 1], // electric
  [1, 2, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], // psychic
  [1, 1, 2, 1, 2, 1, 1, 1, 0, 0, 0, 2, 1, 1, 0, 2, 1, 1], // ice
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0], // dragon
  [1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0], // dark
  [1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 2, 2, 1]  // fairy
];

// source: https://img.pokemondb.net/images/typechart.png
// export const EffectivenessTable = [
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 1, 2],
//   [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 1, 2, 1, 3, 2],
//   [2, 3, 1, 2, 1, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2],
//   [2, 2, 3, 1, 1, 2, 2, 2, 0, 3, 2, 2, 2, 2, 1, 2, 2],
//   [2, 1, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1, 3, 2, 1, 1, 2],
//   [2, 1, 1, 2, 3, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 1, 2],
//   [3, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 3, 0, 2, 3, 1],
//   [2, 2, 2, 2, 3, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 0, 3],
//   [2, 3, 2, 3, 1, 2, 2, 3, 2, 0, 2, 1, 3, 2, 2, 3, 2],
//   [2, 2, 2, 1, 3, 2, 3, 2, 2, 2, 2, 3, 1, 2, 2, 1, 2],
//   [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 1, 2],
//   [2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 1, 1],
//   [2, 3, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 1, 2],
//   [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2],
//   [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 2, 1],
//   [2, 1, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 1, 3],
//   [2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 1, 2]
// ];

// With Dark
// export const EffectivenessTable = [
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 1, 2],
//   [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 1, 2, 1, 2, 3, 2],
//   [2, 3, 1, 2, 1, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 2],
//   [2, 2, 3, 1, 1, 2, 2, 2, 0, 3, 2, 2, 2, 2, 1, 2, 2, 2],
//   [2, 1, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 1, 2],
//   [2, 1, 1, 2, 3, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 1, 2],
//   [3, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 3, 0, 2, 3, 3, 1],
//   [2, 2, 2, 2, 3, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 3],
//   [2, 3, 2, 3, 1, 2, 2, 3, 2, 0, 2, 1, 3, 2, 2, 2, 3, 2],
//   [2, 2, 2, 1, 3, 2, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1, 2],
//   [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 0, 1, 2],
//   [2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 3, 1, 1],
//   [2, 3, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 2, 1, 2],
//   [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 2],
//   [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 1],
//   [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 1],
//   [2, 1, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 3],
//   [2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 1, 2]
// ];

export const EffectivenessMultipliers = {
  // [EffectivenessTypes.NO_EFFECT]: 0,
  [EffectivenessTypes.NOT_VERY_EFFECTIVE]: 0.8,
  [EffectivenessTypes.NORMAL]: 1,
  [EffectivenessTypes.SUPER_EFFECTIVE]: 1.25
};

export const pokemonShape = {
  dex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.oneOf(PokemonTypes))
};

export const pokemonSchema = new Schema('pokemon', { idAttribute: 'dex' });
export const arrayOfPokemonSchema = arrayOf(pokemonSchema);
