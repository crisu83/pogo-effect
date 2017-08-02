// @flow

import type {PokemonState} from '../pokemon/types'
import type {SearchState} from '../search/types'

export type RootState = {
  pokemon: PokemonState,
  search: SearchState,
}
