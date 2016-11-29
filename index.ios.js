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

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText:true};
    //设置定时器每1秒做一次取反
    setInterval(()=>{
      this.setState({showText:!this.state.showText});
    },1000)
  }
  render(){
    let display = this.state.showText?this.props.text:'';
    return (
      <Text>{display}</Text>
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
      <Blink text='I love to blink ' />
      <Blink text='Yes blinking is so great ' />
      <Blink text='Why did they ever take this out of HTML ' />
      <Blink text='Look at me look at me look at me ' />
      </View>
    );
  }
}


AppRegistry.registerComponent('ReactProject', () => ReactProject);
