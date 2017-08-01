// @flow

import isEqual from 'lodash/isEqual'
import React, {Component, PropTypes} from 'react'
import {ListView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TypeColors} from '../constants'
import {alphaSort, normalizeSize} from '../helpers'
import type {ListOfPokemon} from './types'

type Props = {
  data: ListOfPokemon,
  onPress: Function,
}

const PokemonListItem = ({data, onPress}: Props) =>
  <TouchableOpacity onPress={() => onPress(data.dex)}>
    <View style={styles.item}>
      <Text style={styles.name}>
        {data.name}
      </Text>
      <View style={styles.types}>
        {data.types.map((type, index) =>
          <View
            key={index}
            style={[styles.type, {backgroundColor: TypeColors[type]}]}
          />,
        )}
      </View>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
  },
  name: {
    color: '#9b9b9b',
    flex: 0,
    fontSize: normalizeSize(30),
  },
  types: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  type: {
    borderRadius: 5,
    marginLeft: 10,
    height: normalizeSize(8),
    width: normalizeSize(20),
  },
})

export default PokemonListItem
