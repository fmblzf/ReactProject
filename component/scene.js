import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableHighlight,Button,StyleSheet,} from 'react-native';

export default class Scene extends Component{
	static propTypes = {
		title:PropTypes.string.isRequired,
		onForward:PropTypes.func.isRequired,
		onBack:PropTypes.func.isRequired,
		onFetch:PropTypes.func.isRequired,
	};

	render(){
		return (
			<View>
				<Text>Current Scene：{this.props.title}</Text>
				<TouchableHighlight onPress={this.props.onForward} >
				<Text>点我进入下一个场景</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack} >
				<Text>点我回到上一个场景</Text>
				</TouchableHighlight>
				<Button onPress={this.props.onFetch} color='#841584' style={{padding:10,fontSize:42}} title="提交获取数据"/>
			</View>
		);
	}
}