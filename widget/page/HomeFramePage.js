/**
 *
 * 首页场景
 * 
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
} from 'react-native';

import FuncFramePage from './FuncFramePage';
//request,必须用{}扩起来
import {request} from '../utils/RequestUtils';

/**
 * 首页组件
 */
class HomeFramePage extends Component{
	/**
	 * 渲染组件
	 * @return 返回组件
	 */
	render(){
		return (
			<View style={{flex:1}}>
				<Text>
					首页
				</Text>
				<TouchableOpacity 
					activeOpacity={0.2}
					onPress={this._onPressEvent.bind(this)}>
					<Text>下一页</Text>
				</TouchableOpacity>

				<TouchableHighlight
					onPress={this.fetchData}
					underlayColor='blue'
					style={{
						backgroundColor:'#999',
						width:100,
						height:40,

					}} >
					<Text>获取数据</Text>
				</TouchableHighlight>
			</View>
		);
	}
	/**
	 * 获取数据
	 * @return {[type]} [description]
	 */
	fetchData = ()=>{
		request().then((responseJson)=>{
			console.log(JSON.stringify(responseJson));
		})
	}
	/**
	 * 点击事件
	 * this._onPressEvent.bind(this)绑定this实质含义，就是javascript中的作用域问题
	 */
	_onPressEvent(){
		const {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name:'FuncFramePage',
				component:FuncFramePage,
				params:{

				}
			})
		}
	}

} 
//导出组件，使得其他模块可以调用
module.exports = HomeFramePage;
