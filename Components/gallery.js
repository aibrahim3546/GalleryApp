import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Button
} from 'react-native';


export default class Gallery extends Component<{}> {

  static navigationOptions = {
    title: "My Gallery"
  }

  constructor(){
    super();
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2}),
      link: "https://api.dribbble.com/v1/shots?access_token=37d1dae5a5d33fdd7b87e2381675bfa28d0d0c677dcb5f29781a8b93e879797e"
    }
  }
  componentDidMount(){
    fetch(this.state.link)
    .then((response) => response.json())
    .then((responseJson) =>{
      data = responseJson;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor:'#fff'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow = {(rowData) =>
          <View style={styles.view}>

            <Image style={styles.userImg}
              source = {{uri: rowData.user.avatar_url}}
            />
            <Text style = {styles.userName}>{rowData.user.name}</Text>

            <Image
              style ={styles.imgStyle}
              source = {{uri:rowData.images.normal}}
            />
            <Text style={styles.imgText}>{rowData.title}</Text>
            <Button
              onPress={() => navigate('Details',{userImg: rowData.user.avatar_url, name: rowData.user.name, img: rowData.images.normal, title:rowData.title, description:rowData.description, link:rowData.html_url})}
              title="Info"
            />
          </View>
        }
        />
      </View>
    );
   }
  }


const styles = StyleSheet.create({
  view:{
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#e7e7e7',
    borderRadius: 25
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
  }
});
