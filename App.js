import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/gallery';
import Details from './Components/details';
const App = StackNavigator({
  Home: { screen: HomeScreen},
  Details: { screen: Details}
});

export default App;
