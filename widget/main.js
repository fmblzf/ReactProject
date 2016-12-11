/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Text,
  View,
} from 'react-native'; 

import Header from './component/header';

class Main extends Component {
  render(){
    return (
      <Header />
    );
  }
}

export default Main;