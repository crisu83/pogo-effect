// @flow

import React, {PropTypes} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import {normalizeSize} from '../helpers'

type Props = {
  onPress: Function,
}

const Back = ({onPress, ...rest}: Props) =>
  <TouchableOpacity {...rest} style={styles.button} onPress={onPress}>
    <Icon style={styles.icon} name="chevron-left" />
  </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#9b9b9b',
    fontSize: normalizeSize(26),
  },
})

export default Back
