// @flow

import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {navigate} from 'react-navigation'
import {connect} from 'react-redux'
import {getAllPokemon} from '../pokemon/actions'
import {getPokemonBySearchQuery} from '../pokemon/selectors'
import {activateSearch, performSearch, clearSearch} from '../search/actions'
import {getIsSearchActive, getSearchQuery} from '../search/selectors'
import {normalizeSize} from '../helpers'
import Search from '../search/Search'
import PokemonList from '../pokemon/PokemonList'
import type {Pokemon} from '../pokemon/types'

type Props = {
  data: Array<Pokemon>,
  navigation: any,
  getAllPokemon: typeof getAllPokemon,
}

class HomeScreen extends Component {
  props: Props

  static defaultProps: Object = {
    data: [],
  }

  componentDidMount() {
    this.props.getAllPokemon()
  }

  render() {
    const {data, navigation} = this.props

    return (
      <View style={styles.component}>
        <View style={styles.head}>
          <Search />
        </View>
        <PokemonList
          style={styles.list}
          data={data}
          onItemPress={dex => navigation.navigate('Detail', {dex})}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: getPokemonBySearchQuery(state),
})

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 18,
    paddingBottom: 20,
  },
  list: {
    paddingLeft: 50,
    paddingRight: 50,
  },
})

export default connect(mapStateToProps, {getAllPokemon})(HomeScreen)
