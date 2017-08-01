// @flow

import React, {Component} from 'react'
import {StyleSheet, StatusBar, View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import Navigator from './Navigator'

const store = configureStore()

const Root = () =>
  <View style={styles.component}>
    <StatusBar hidden={true} />
    <Provider store={store}>
      <Navigator />
    </Provider>
  </View>

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
})

export default Root
