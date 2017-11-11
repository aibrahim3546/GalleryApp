import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/home';
import Gallery from './Components/gallery';
import Details from './Components/details';
const App = StackNavigator({
  Home: { screen: HomeScreen},
  Gallery: { screen: Gallery},
  Details: { screen: Details}
},{
    headerMode: 'screen'
  }
);

export default App;
