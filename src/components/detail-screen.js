import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { pokemonShape, TypeColors } from '../constants';
import { normalizeSize, capitalize, calculateWidth } from '../helpers';

import { getOnePokemon, getWeakAgainstPokemon, getStrongAgainstPokemon } from '../state/modules/pokemon/selectors';

import PokemonList from './pokemon-list';
import BackButton from './back-button';
import HomeButton from './home-button';

const TabTypes = {
  WEAK_AGAINST: 0,
  STRONG_AGAINST: 1
};

const TypeList = ({ data }) => (
  <View style={styles.types}>
    {data.map((type, index) => <TypeListItem key={index} style={styles.type} type={type}/>)}
  </View>
);

const TypeListItem = ({ type, style, ...rest }) => (
  <View style={[styles.type, { backgroundColor: TypeColors[type] }]}>
    <Text style={styles.typeText}>{capitalize(type)}</Text>
  </View>
);

const TabItem = ({ tab, isActive, children, onPress }) => (
  <TouchableHighlight style={[styles.tab, isActive ? styles.tabActive : null]}
                      onPress={() => onPress(tab)}
                      underlayColor="transparent">
    <Text style={[styles.tabText, isActive ? styles.tabTextActive : null]}>
      {children}
    </Text>
  </TouchableHighlight>
);

const WeakAgainstPokemon = ({ data, onPokemonPress }) => (
  <View style={styles.tabContent}>
    <PokemonList style={styles.list}
                 data={data}
                 onItemPress={onPokemonPress}
                 sortData={(a, b) => b.score - a.score}/>
  </View>
);

const StrongAgainstPokemon = ({ data, onPokemonPress }) => (
  <View style={styles.tabContent}>
    <PokemonList style={styles.list}
                 data={data}
                 onItemPress={onPokemonPress}
                 sortData={(a, b) => b.score - a.score}/>
  </View>
);

class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.state = { activeTab: TabTypes.WEAK_AGAINST };
  }

  changeTab(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { data, weakAgainst, strongAgainst, onPokemonPress, onBackPress, onHomePress } = this.props;
    const { activeTab } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.head}>
            <View style={styles.title}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.dex}>{data.dex}</Text>
            </View>
            <TypeList data={data.types}/>
          </View>
          <View style={styles.tabs}>
            <TabItem tab={TabTypes.WEAK_AGAINST}
                     isActive={activeTab === TabTypes.WEAK_AGAINST}
                     onPress={this.changeTab}>weak against</TabItem>
            <TabItem tab={TabTypes.STRONG_AGAINST}
                     isActive={activeTab === TabTypes.STRONG_AGAINST}
                     onPress={this.changeTab}>strong against</TabItem>
          </View>
          {activeTab === TabTypes.WEAK_AGAINST
            ? <WeakAgainstPokemon data={weakAgainst} onPokemonPress={onPokemonPress}/>
            : null}
          {activeTab === TabTypes.STRONG_AGAINST
            ? <StrongAgainstPokemon data={strongAgainst} onPokemonPress={onPokemonPress}/>
            : null}
          <BackButton onPress={onBackPress}/>
          <HomeButton onPress={onHomePress}/>
        </ScrollView>
      </View>
    );
  }
}

DetailScreen.propTypes = {
  dex: PropTypes.string.isRequired,
  data: PropTypes.shape(pokemonShape).isRequired,
  onBackPress: PropTypes.func.isRequired,
  onHomePress: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  data: getOnePokemon(state.pokemon, ownProps.dex),
  weakAgainst: getWeakAgainstPokemon(state.pokemon, ownProps.dex),
  strongAgainst: getStrongAgainstPokemon(state.pokemon, ownProps.dex)
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  head: {
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 25
  },
  title: {
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10
  },
  name: {
    color: '#9b9b9b',
    fontSize: normalizeSize(30),
    marginRight: 5
  },
  dex: {
    color: '#9b9b9b',
    fontSize: normalizeSize(16),
    lineHeight: normalizeSize(32)
  },
  types: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50
  },
  type: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    height: 36,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    width: calculateWidth(34)
  },
  typeText: {
    color: '#fff',
    fontSize: normalizeSize(14)
  },
  tabs: {
    alignItems: 'flex-end',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50
  },
  tab: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    marginBottom: -1,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    width: calculateWidth(34)
  },
  tabActive: {
    borderBottomColor: '#727272'
  },
  tabText: {
    color: '#9b9b9b'
  },
  tabTextActive: {
    color: '#727272'
  },
  tabContent: {
    paddingTop: 15
  },
  list: {
    paddingLeft: 50,
    paddingRight: 50
  }
});

export default connect(mapStateToProps)(DetailScreen);
