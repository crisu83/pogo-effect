// @flow

import noop from 'lodash/noop'
import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {activateSearch} from './actions'
import {getIsSearchActive} from './selectors'
import SearchField from './SearchField'

type Props = {
  activateSearch: typeof activateSearch,
  isSearchActive: boolean,
}

const Search = ({activateSearch, isSearchActive}: Props) =>
  <TouchableOpacity
    style={styles.component}
    onPress={!isSearchActive ? activateSearch : noop}
  >
    <View style={[styles.search, !isSearchActive && styles.searchInactive]}>
      {isSearchActive
        ? <SearchField />
        : <Image
            style={styles.searchIcon}
            source={require('../../assets/images/icon-search.png')}
          />}
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  component: {
    height: 40,
  },
  search: {
    backgroundColor: '#f53b00',
    borderRadius: 20,
    // flex: 1,
    height: 40,
  },
  searchInactive: {
    alignSelf: 'center',
    padding: 0,
    width: 40,
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
  },
})

const mapStateToProps = state => ({
  isSearchActive: getIsSearchActive(state),
})

export default connect(mapStateToProps, {activateSearch})(Search)
