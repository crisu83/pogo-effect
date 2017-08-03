// @flow

import React, {Component} from 'react'
import {StyleSheet, FlatList, Text, View} from 'react-native'
import {TypeColors} from '../constants'
import {alphaSort, normalizeSize} from '../helpers'
import PokemonListItem from './PokemonListItem'
import type {ListOfPokemon} from './types'

type Props = {
  data: ListOfPokemon,
  onItemPress: Function,
  sortData: Function,
}

type State = {
  sortedData: ListOfPokemon,
}

class PokemonList extends Component {
  props: Props

  state: State = {
    sortedData: [],
  }

  static defaultProps = {
    sortData: alphaSort('name'),
  }

  componentWillMount() {
    this.setData(this.props.data)
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setData(nextProps.data)
  }

  setData = (data: ListOfPokemon) => {
    const clone = [...data]
    clone.sort(this.props.sortData)
    this.setState({sortedData: clone})
  }

  render() {
    const {onItemPress, ...rest} = this.props
    const {sortedData} = this.state

    return (
      <FlatList
        {...rest}
        data={sortedData}
        keyExtractor={item => item.dex}
        renderItem={item =>
          <PokemonListItem data={item} onPress={onItemPress} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>None</Text>
          </View>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
  },
  emptyText: {
    color: '#9b9b9b',
    fontSize: normalizeSize(30),
  },
})

export default PokemonList
