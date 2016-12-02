/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';


import Scene from './component/scene';

class ReactProject extends Component{
  fetchData = () => {
    return fetch('http://bbs.reactnative.cn/api/category/3')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render(){
    return (
      <Navigator 
        initialRoute={{title:'My Initial Scene',index:0}}
        renderScene={(route,navigator)=>
          <Scene 
            title={route.title} 
            //Function to call when a new scene should be displayed
            onForward={()=>{
              const nextIndex = route.index+1;
              navigator.push({
                title:'Scene'+nextIndex,
                index:nextIndex
              });
            }}
            //Function to call to go back the previous scene 
            onBack={()=>{
              if (route.index > 0) {
                navigator.pop();
              }
            }}
            //Funtion to fetch data
            onFetch={this.fetchData}
          />
          
        }
      />      
    );
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);
