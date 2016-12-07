/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
} from 'react-native';


import NavigatorNew from './component/navigator.js';
import DrawLayoutAndroid from './component/drawLayoutAndroid.js';

class ReactProject extends Component {
 
  render() {
    return (    
    	<DrawLayoutAndroid />
    );
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);