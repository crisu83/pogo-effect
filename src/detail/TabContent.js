// @flow

import React from 'react'
import {StyleSheet, View} from 'react-native'
import PokemonList from '../pokemon/PokemonList'
import type {ListOfPokemon} from '../pokemon/types'

type Props = {
  data: ListOfPokemon,
  onPokemonPress: Function,
}

const TabContent = ({data, onPokemonPress}: Props) =>
  <View style={styles.component}>
    <PokemonList
      style={styles.list}
      data={data}
      onItemPress={onPokemonPress}
      sortData={(a, b) => b.score - a.score}
    />
  </View>

const styles = StyleSheet.create({
  component: {
    flex: 1,
    paddingTop: 15,
  },
  list: {
    paddingLeft: 50,
    paddingRight: 50,
  },
})

export default TabContent
