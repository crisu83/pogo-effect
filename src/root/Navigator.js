// @flow

import {StackNavigator} from 'react-navigation'
import HomeScreen from '../home/HomeScreen'
import DetailScreen from '../detail/DetailScreen'

const Navigator = StackNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
  },
  {
    headerMode: 'none',
  },
)

export default Navigator
