import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Provider } from 'react-redux';

import { createStore } from './state/index';

import * as searchActions from './state/modules/search/actions';

import HomeScreen from './components/home-screen';
import DetailScreen from './components/detail-screen';

export const RouteIds = {
  HOME: 0,
  DETAIL: 1
};

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createStore();
    this.goHome = this.goHome.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goDetails = this.goDetails.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  goHome(navigator) {
    this.store.dispatch(searchActions.clearSearch());
    navigator.popToTop();
  }

  goBack(navigator) {
    navigator.pop();
  }

  goDetails(navigator, passProps) {
    navigator.push({ id: RouteIds.DETAIL, passProps });
  }

  renderScene(route, navigator) {
    if (route.id === RouteIds.DETAIL) {
      return <DetailScreen {...route.passProps} onBackPress={() => this.goBack(navigator)}
                                                onHomePress={() => this.goHome(navigator)}
                                                onPokemonPress={(dex) => this.goDetails(navigator, { dex })}/>;
    } else {
      return <HomeScreen {...route.passProps} onPokemonPress={(dex) => this.goDetails(navigator, { dex })}/>;
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <Navigator initialRoute={{ id: RouteIds.HOME }} renderScene={this.renderScene}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PogoEffect', () => App);
