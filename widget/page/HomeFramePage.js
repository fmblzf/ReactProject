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
} from 'react-native';

import FuncFramePage from './FuncFramePage';

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
					onPress={this._onPressEvent.bind(this)}
				>
					<Text>下一页</Text>
				</TouchableOpacity>
			</View>
		);
	}
	/**
	 * 点击事件
	 * @return {[type]} [description]
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
