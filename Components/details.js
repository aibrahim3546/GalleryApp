import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Linking,
  ScrollView
} from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class Details extends Component<{}> {

  static navigationOptions = ({ navigation }) => ({
      title: 'Info',
    });


 render() {
   const { params } = this.props.navigation.state;

   let htmlContent = params.description;

    if (htmlContent) {
      htmlContent = params.description;
    } else {
      htmlContent = '<p>description not available</p>';
    }

   return (
      <View style={{backgroundColor:'#fff', height:'100%'}}>
        <ScrollView>
          <View style={styles.view}>
              <Image style={styles.userImg}
                source = {{uri:`${params.userImg}`}}
              />
              <Text style = {styles.userName}>{params.name}</Text>

              <Image
                style ={styles.imgStyle}
                source = {{uri:`${params.img}`}}
              />
              <Text style={styles.imgText}>{params.title}</Text>
              <HTMLView
              value={htmlContent}
              stylesheet={htmlstyles}
              />
              <Text style={styles.link}
               onPress={() => Linking.openURL(`${params.link}`)}>
               Link: {params.link}
              </Text>
          </View>
        </ScrollView>
      </View>

   );
 }
}


const styles = StyleSheet.create({
  view:{
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#fff',
  },
  imgStyle:{
    width:'100%',
    height:250
  },
  imgText: {
    backgroundColor: '#e7e7e7',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#010101',
    padding: 10
  },
  userImg:{
    marginLeft: 'auto' ,
    marginRight: 'auto',
    width:50,
    height:50,
    marginBottom: 5,
    marginTop: 5
  },
  userName:{
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    marginBottom: 2
  },
  appTitle:{
    padding: 10,
    height:60,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    backgroundColor: '#fff',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 2,
    color: "#000"
  },
  link:{
    fontSize: 14,
    color: 'steelblue',
    fontWeight: '700',
    paddingTop:5,
    paddingBottom: 5
  }
});

const htmlstyles = StyleSheet.create({
  p:{
    paddingTop: 10,
    paddingBottom: 10,
    fontSize:20,
    color:'#000'
  }
});
