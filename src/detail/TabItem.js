// @flow

import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {calculateWidth} from '../helpers'

type Props = {
  tabIndex: number,
  label: string,
  isActive: boolean,
  onPress: Function,
}

const TabItem = ({tabIndex, label, isActive, onPress}: Props) =>
  <TouchableOpacity
    style={[styles.component, isActive ? styles.tabActive : null]}
    onPress={() => onPress(tabIndex)}
  >
    <Text style={[styles.tabText, isActive ? styles.tabTextActive : null]}>
      {label}
    </Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  component: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    marginBottom: -1,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    width: calculateWidth(34),
  },
  tabActive: {
    borderBottomColor: '#727272',
  },
  tabText: {
    color: '#9b9b9b',
  },
  tabTextActive: {
    color: '#727272',
  },
})

export default TabItem
