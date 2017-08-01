// @flow

import {Schema, arrayOf} from 'normalizr'

export const pokemonSchema = new Schema('pokemon', {idAttribute: 'dex'})

export const arrayOfPokemonSchema = arrayOf(pokemonSchema)
