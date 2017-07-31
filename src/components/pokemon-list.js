import isEqual from 'lodash/isEqual';
import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { pokemonShape, TypeColors } from '../constants';
import { alphaSort, normalizeSize } from '../helpers';

const PokemonListItem = ({ data, onPress }) => (
  <TouchableHighlight underlayColor="transparent" onPress={() => onPress(data.dex)}>
    <View style={styles.item}>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.types}>
        {data.types.map((type, index) =>
          <View key={index} style={[styles.type, { backgroundColor: TypeColors[type] }]}/>)}
      </View>
    </View>
  </TouchableHighlight>
);

PokemonListItem.propTypes = {
  data: PropTypes.shape(pokemonShape).isRequired,
  onPress: PropTypes.func.isRequired
};

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.setDataSource = this.setDataSource.bind(this);
    this.factory = new ListView.DataSource({ rowHasChanged: (a, b) => a.dex !== b.dex });
    this.state = { dataSource: this.factory.cloneWithRows([]) };
  }

  componentDidMount() {
    this.setDataSource(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.data, this.props.data)) {
      this.setDataSource(nextProps.data);
    }
  }

  setDataSource(data) {
    const clone = [...data];
    clone.sort(this.props.sortData);
    this.setState({ dataSource: this.factory.cloneWithRows(clone) });
  }

  render() {
    const { onItemPress, style } = this.props;
    const { dataSource } = this.state;

    return (
      <ListView style={style}
                dataSource={dataSource}
                renderRow={(rowData) => <PokemonListItem data={rowData} onPress={onItemPress}/>}
                enableEmptySections
                removeClippedSubviews={false}/>
    );
  }
}

PokemonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(pokemonShape)),
  onItemPress: PropTypes.func.isRequired,
  sortData: PropTypes.func.isRequired
};

PokemonList.defaultProps = {
  sortData: alphaSort('name')
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2
  },
  name: {
    color: '#9b9b9b',
    flex: 0,
    fontSize: normalizeSize(30)
  },
  types: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  type: {
    borderRadius: 5,
    marginLeft: 10,
    height: normalizeSize(8),
    width: normalizeSize(20)
  }
});

export default PokemonList;
