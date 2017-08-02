// @flow

import React, {Component} from 'react'
import {StyleSheet, ScrollView, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {clearSearch} from '../search/actions'
import {
  getOnePokemon,
  getWeakAgainstPokemon,
  getStrongAgainstPokemon,
} from '../pokemon/selectors'
import {TypeColors} from '../constants'
import {normalizeSize, capitalize, calculateWidth} from '../helpers'
import TypeList from './TypeList'
import TabItem from './TabItem'
import TabContent from './TabContent'
import PokemonList from '../pokemon/PokemonList'
import BackButton from '../generic/BackButton'
import HomeButton from '../generic/HomeButton'
import type {Pokemon, ListOfPokemon} from '../pokemon/types'

const TabIndex = {
  WEAK_AGAINST: 0,
  STRONG_AGAINST: 1,
}

type Props = {
  navigation: any,
  data: Pokemon,
  weakAgainst: ListOfPokemon,
  strongAgainst: ListOfPokemon,
  clearSearch: typeof clearSearch,
}

type State = {
  activeTabIndex: number,
}

class DetailScreen extends Component {
  props: Props

  state: State = {
    activeTabIndex: TabIndex.WEAK_AGAINST,
  }

  changeTab = tabIndex => {
    this.setState({activeTabIndex: tabIndex})
  }

  onPokemonPress = dex => {
    this.props.navigation.navigate('Detail', {dex})
  }

  onBackPress = () => {
    this.props.navigation.goBack()
  }

  onHomePress = () => {
    this.props.clearSearch()
    this.props.navigation.navigate('Home')
  }

  render() {
    const {navigation, data, weakAgainst, strongAgainst} = this.props
    const {activeTabIndex} = this.state

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.head}>
            <View style={styles.title}>
              <Text style={styles.name}>
                {data.name}
              </Text>
              <Text style={styles.dex}>
                {data.dex}
              </Text>
            </View>
            <TypeList data={data.types} />
          </View>
          <View style={styles.tabs}>
            <TabItem
              tabIndex={TabIndex.WEAK_AGAINST}
              label="weak against"
              isActive={activeTabIndex === TabIndex.WEAK_AGAINST}
              onPress={this.changeTab}
            />
            <TabItem
              tabIndex={TabIndex.STRONG_AGAINST}
              label="strong against"
              isActive={activeTabIndex === TabIndex.STRONG_AGAINST}
              onPress={this.changeTab}
            />
          </View>
          {activeTabIndex === TabIndex.WEAK_AGAINST &&
            <TabContent
              data={weakAgainst}
              onPokemonPress={this.onPokemonPress}
            />}
          {activeTabIndex === TabIndex.STRONG_AGAINST &&
            <TabContent
              data={strongAgainst}
              onPokemonPress={this.onPokemonPress}
            />}
          <BackButton onPress={this.onBackPress} />
          <HomeButton onPress={this.onHomePress} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  head: {
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 25,
  },
  title: {
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
  },
  name: {
    color: '#9b9b9b',
    fontSize: normalizeSize(30),
    marginRight: 5,
  },
  dex: {
    color: '#9b9b9b',
    fontSize: normalizeSize(16),
    lineHeight: normalizeSize(32),
  },
  tabs: {
    alignItems: 'flex-end',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
  },
})

const mapStateToProps = (state, props) => {
  const {dex} = props.navigation.state.params
  return {
    data: getOnePokemon(state, {dex}),
    weakAgainst: getWeakAgainstPokemon(state, {dex}),
    strongAgainst: getStrongAgainstPokemon(state, {dex}),
  }
}

export default connect(mapStateToProps, {clearSearch})(DetailScreen)
