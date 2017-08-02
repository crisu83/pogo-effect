// @flow

import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'

type Props = {
  onPress: Function,
}

const HomeButton = ({onPress, ...rest}: Props) =>
  <TouchableOpacity {...rest} style={styles.button} onPress={onPress}>
    <Image
      style={styles.icon}
      source={require('../../assets/images/icon-search.png')}
    />
  </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    padding: 18,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icon: {
    borderRadius: 15,
    backgroundColor: '#9b9b9b',
    height: 30,
    width: 30,
  },
})

export default HomeButton
