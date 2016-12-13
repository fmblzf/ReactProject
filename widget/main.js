/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Alert,
} from 'react-native'; 

import Header from './component/header';

class Main extends Component {
  render(){
    return (
      <Header title='Main'/>
    );
  }
}

export default Main;