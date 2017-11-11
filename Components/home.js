import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class Home extends Component<{}> {

  static navigationOptions ={
      header: null,
      title: 'Dribbble'
    };


 render() {
   const { navigate } = this.props.navigation;
   return (
      <View style={styles.view}>
        <Image source={require('../images/dribbble.png')} style={{width:50, height:50}} />
        <Text style={styles.text}>Most Popular Shots</Text>
        <TouchableOpacity
          onPress={() => navigate('Gallery')}
        >
          <Text style={styles.btn}>Go</Text>
        </TouchableOpacity>
      </View>

   );
 }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: '#333333',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ea4c89',
    color: '#333333',
    borderRadius: 20,
    fontSize:38,
    fontWeight: '800',
    borderColor: '#ea4c89'
  },
  text:{
    padding: 10,
    backgroundColor: '#333333',
    color: '#efefef',
    fontSize:28,
    fontWeight: '700'
  }

});
