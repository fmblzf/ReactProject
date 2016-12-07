'use strict'

import React,{Component} from 'react';
import {StyleSheet,Navigator,
  Text,
  View,} from 'react-native';



import Scene from './scene';
import Playground from './animate'; 
import ToggleAnimatingActivityIndicator from './ActivityIndicator_SELF';
import ActivityIndicatorNew from './ActivityIndicator_SELF_NEW';

class NavigatorNew extends Component{
	 fetchData = () => {
	    return fetch('http://bbs.reactnative.cn/api/category/3')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        console.log(responseJson)
	        this.setState({
	          topics: responseJson.topics
	        })
	      })
	      .catch((error) => {
	        console.error(error);
	      });
	  };
	/**
	 * 渲染模板组件
	 * @return 返回组件UI
	 */
	render(){
		return (
			<Navigator 
		        initialRoute = {{
		          title: 'My Initial Scene',
		          index: 0
		        }}
		        renderScene = {(route, navigator) =>
		          <View style={{flex:1}}>
		            <Scene
		              title = {
		                route.title
		              }
		              //Function to call when a new scene should be displayed
		              onForward = {() => {
		                const nextIndex = route.index + 1;
		                navigator.push({
		                  title: 'Scene' + nextIndex,
		                  index: nextIndex
		                });
		              }}
		              //Function to call to go back the previous scene 
		              onBack = {() => {
		                if (route.index > 0) {
		                  navigator.pop();
		                }
		              }}
		              //Funtion to fetch data
		              onFetch = {
		                this.fetchData
		              }
		            />
		            <View accessible={true}>
		              <Text>text one</Text>
		              <Text>text two</Text>
		              <ToggleAnimatingActivityIndicator />
		              <ActivityIndicatorNew />
		            </View>

		            <Playground />
		        </View>
		      }
		   /> 
		);
	}
}

module.exports = NavigatorNew

