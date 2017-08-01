// @flow

import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import {performSearch, clearSearch} from './actions'
import {getIsSearchActive, getSearchQuery} from './selectors'
import {normalizeSize} from '../helpers'

type Props = {
  searchQuery: string,
  performSearch: typeof performSearch,
  clearSearch: typeof clearSearch,
}

const SearchField = ({searchQuery, performSearch, clearSearch}: Props) =>
  <View style={styles.isSearchActive}>
    <TextInput
      style={styles.searchInput}
      onChangeText={performSearch}
      value={searchQuery}
      autoCorrect={false}
      autoFocus
    />
    <TouchableOpacity style={styles.searchClear} onPress={clearSearch}>
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

const mapStateToProps = state => ({
  isSearchActive: getIsSearchActive(state.search),
  searchQuery: getSearchQuery(state.search),
})

export default connect(mapStateToProps, {performSearch, clearSearch})(
  SearchField,
)
