// @flow

import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {TypeColors} from '../constants'
import {normalizeSize, capitalize, calculateWidth} from '../helpers'
import type {PokemonTypeName} from '../pokemon/types'

type Props = {
  type: PokemonTypeName,
}

const TypeListItem = ({type, ...rest}: Props) =>
  <View style={[styles.type, {backgroundColor: TypeColors[type]}]}>
    <Text style={styles.typeText}>
      {capitalize(type)}
    </Text>
  </View>

const styles = StyleSheet.create({
  type: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    height: 36,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    width: calculateWidth(34),
  },
  typeText: {
    color: '#fff',
    fontSize: normalizeSize(14),
  },
})

export default TypeListItem
