// @flow

import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {normalizeSize} from '../helpers'

type Props = {
  isSearchActive: boolean,
  searchQuery: string,
  onChange: Function,
  onClear: Function,
}

const SearchField = ({isSearchActive, searchQuery, onChange, onClear}: Props) =>
  <View style={styles.isSearchActive}>
    <TextInput
      style={styles.searchInput}
      onChangeText={onChange}
      value={searchQuery}
      autoCorrect={false}
      autoFocus
    />
    <TouchableOpacity style={styles.searchClear} onPress={onClear}>
      <Text style={styles.searchClearText}>×</Text>
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
  isSearchActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    color: '#fff',
    flex: 1,
    fontSize: normalizeSize(20),
    height: 20,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  searchClear: {
    flex: 0,
    paddingLeft: 12,
    paddingRight: 12,
  },
  searchClearText: {
    color: '#fff',
    fontSize: normalizeSize(30),
    lineHeight: normalizeSize(30),
  },
})

export default SearchField
