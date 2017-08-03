// @flow

export const EnabledGenerations = [1, 2]

export const DisabledPokemon = [
  'Mew',
  'Mewtwo',
  'Raikou',
  'Entei',
  'Suicune',
  'Celebi',
  'Ho-Oh',
]

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
  FAIRY: 'fairy',
}

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
  [TypeNames.FAIRY]: '#ffa1d0',
}

export const PokemonTypes = [
  TypeNames.BUG,
  TypeNames.DARK,
  TypeNames.DRAGON,
  TypeNames.ELECTRIC,
  TypeNames.FAIRY,
  TypeNames.FIGHTING,
  TypeNames.FIRE,
  TypeNames.FLYING,
  TypeNames.GHOST,
  TypeNames.GRASS,
  TypeNames.GROUND,
  TypeNames.ICE,
  TypeNames.NORMAL,
  TypeNames.POISON,
  TypeNames.PSYCHIC,
  TypeNames.ROCK,
  TypeNames.STEEL,
  TypeNames.WATER,
]

const EffectivenessTypes = {
  RESISTANT: 0,
  NOT_VERY_EFFECTIVE: 1,
  NORMAL: 2,
  SUPER_EFFECTIVE: 3,
}

// source: https://www.reddit.com/r/TheSilphRoad/comments/6iedgc/new_type_effectiveness_chart/
export const EffectivenessMultipliers = {
  [EffectivenessTypes.RESISTANT]: 0.51,
  [EffectivenessTypes.NOT_VERY_EFFECTIVE]: 0.714,
  [EffectivenessTypes.NORMAL]: 1,
  [EffectivenessTypes.SUPER_EFFECTIVE]: 1.4,
}

// source: http://i.imgur.com/sxs90Lx.png
// The defender is on the x-axis and the attacker is on the y-axis.
export const EffectivenessTable = [
  [2, 3, 2, 2, 1, 1, 1, 1, 1, 3, 2, 2, 2, 1, 3, 2, 1, 2], // bug
  [2, 1, 2, 2, 1, 1, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2], // dark
  [2, 2, 3, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2], // dragon
  [2, 2, 1, 1, 2, 2, 2, 3, 2, 1, 0, 2, 2, 2, 2, 2, 2, 3], // electric
  [2, 3, 3, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2], // fairy
  [1, 3, 2, 2, 1, 2, 2, 1, 0, 2, 2, 3, 3, 1, 1, 3, 3, 2], // fighting
  [3, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 3, 2, 2, 2, 1, 3, 1], // fire
  [3, 2, 2, 1, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 1, 2], // flying
  [2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 0, 2, 3, 2, 2, 2], // ghost
  [1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 3, 1, 3], // grass
  [1, 2, 2, 3, 2, 2, 3, 0, 2, 1, 2, 2, 2, 3, 2, 3, 3, 2], // ground
  [2, 2, 3, 2, 2, 2, 1, 3, 2, 3, 3, 1, 2, 2, 2, 2, 1, 1], // ice
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 1, 2], // normal
  [2, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 2, 2, 1, 2, 1, 0, 2], // poison
  [2, 0, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 1, 2], // psychic
  [3, 2, 2, 2, 2, 1, 3, 3, 2, 2, 1, 3, 2, 2, 2, 2, 1, 2], // rock
  [2, 2, 2, 1, 3, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 3, 1, 1], // steel
  [2, 2, 1, 2, 2, 2, 3, 2, 2, 1, 3, 2, 2, 2, 2, 3, 2, 1], // water
]
