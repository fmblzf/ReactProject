/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


class ReactProjects extends Component{

    render(){
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width:193,height:110}} />
      );
    }

}

class Greeting extends Component{
  render(){
    return (
        <Text>
          Hello {this.props.name}!
        </Text>
    );
  }
}

class ReactProject extends Component{
  render(){
    return (
      <View style={{alignItems:'center'}}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
      </View>
    );
  }
}


AppRegistry.registerComponent('ReactProject', () => ReactProject);
