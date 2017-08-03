// @flow

import React from 'react'
import {StyleSheet, View} from 'react-native'
import TypeListItem from './TypeListItem'
import type {ListOfPokemonTypeNames} from '../pokemon/types'

type Props = {
  data: ListOfPokemonTypeNames,
}

const TypeList = ({data}: Props) =>
  <View style={styles.types}>
    {data.map((type, index) => <TypeListItem key={index} type={type} />)}
  </View>

const styles = StyleSheet.create({
  types: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
  },
})

export default TypeList
