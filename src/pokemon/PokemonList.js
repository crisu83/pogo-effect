// @flow

import isEqual from 'lodash/isEqual'
import React, {Component, PropTypes} from 'react'
import {ListView} from 'react-native'
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
  dataSource: *,
}

class PokemonList extends Component {
  factory: * = new ListView.DataSource({
    rowHasChanged: (a, b) => a.dex !== b.dex,
  })

  state: State = {
    dataSource: this.factory.cloneWithRows([]),
  }

  static defaultProps = {
    sortData: alphaSort('name'),
  }

  componentDidMount() {
    this.setDataSource(this.props.data)
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!isEqual(nextProps.data, this.props.data)) {
      this.setDataSource(nextProps.data)
    }
  }

  setDataSource = (data: ListOfPokemon) => {
    const clone = [...data]
    clone.sort(this.props.sortData)
    this.setState({dataSource: this.factory.cloneWithRows(clone)})
  }

  render() {
    const {onItemPress, style} = this.props
    const {dataSource} = this.state

    return (
      <ListView
        style={style}
        dataSource={dataSource}
        renderRow={rowData =>
          <PokemonListItem data={rowData} onPress={onItemPress} />}
        enableEmptySections
        removeClippedSubviews={false}
      />
    )
  }
}

export default PokemonList
