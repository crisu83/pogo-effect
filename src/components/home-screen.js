import React, { Component, PropTypes } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import * as pokemonActions from '../state/modules/pokemon/actions';
import * as searchActions from '../state/modules/search/actions';
import { getPokemonBySearchQuery } from '../state/modules/pokemon/selectors';
import { getIsSearchActive, getSearchQuery } from '../state/modules/search/selectors';

import { pokemonShape } from '../constants';
import { normalizeSize } from '../helpers';

import PokemonList from './pokemon-list';

const SearchField = ({ query, onChange, onClear }) => (
  <View style={styles.isSearchActive}>
    <TextInput style={styles.searchInput} onChangeText={onChange} value={query} autoCorrect={false} autoFocus/>
    <TouchableHighlight style={styles.searchClear} underlayColor="transparent" onPress={onClear}>
      <Text style={styles.searchClearText}>×</Text>
    </TouchableHighlight>
  </View>
);

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    const { isSearchActive, searchQuery, data, onPokemonPress, performSearch, clearSearch } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableHighlight style={styles.searchButton}
                              underlayColor="transparent"
                              onPress={!isSearchActive ? this.props.activateSearch : () => {}}>
            <View style={[styles.search, !isSearchActive && styles.searchInactive]}>
              {isSearchActive
                ? <SearchField query={searchQuery} onChange={performSearch} onClear={clearSearch}/>
                : <Image style={styles.searchIcon} source={require('../../assets/images/icon-search.png')}/>}
            </View>
          </TouchableHighlight>
        </View>
        <PokemonList style={styles.list} data={data} onItemPress={onPokemonPress}/>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  isSearchActive: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(pokemonShape)).isRequired,
  onPokemonPress: PropTypes.func.isRequired
};

HomeScreen.defaultProps = {
  isSearchActive: false,
  searchQuery: '',
  data: []
};

const mapStateToProps = (state) => ({
  isSearchActive: getIsSearchActive(state.search),
  searchQuery: getSearchQuery(state.search),
  data: getPokemonBySearchQuery(state.pokemon, state.search.query)
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 18,
    paddingBottom: 20
  },
  search: {
    backgroundColor: '#f53b00',
    borderRadius: 20,
    flex: 1,
    height: 40
  },
  searchInactive: {
    alignSelf: 'center',
    padding: 0,
    width: 40
  },
  isSearchActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40
  },
  searchButton: {
    flex: 1
  },
  searchInput: {
    color: '#fff',
    flex: 1,
    fontSize: normalizeSize(20),
    height: 20,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10
  },
  searchClear: {
    flex: 0,
    paddingLeft: 12,
    paddingRight: 12
  },
  searchClearText: {
    color: '#fff',
    fontSize: normalizeSize(30),
    lineHeight: normalizeSize(30)
  },
  list: {
    paddingLeft: 50,
    paddingRight: 50
  }
});

export default connect(mapStateToProps, { ...pokemonActions, ...searchActions })(HomeScreen);
