/**
 *
 * 功能场景
 * 
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

/**
 * 功能组件
 */
class FuncFramePage extends Component{
	/**
	 * 渲染组件
	 * @return 返回组件
	 */
	render(){
		return (
			<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
				<Text>
					功能页
				</Text>
				<TouchableOpacity 
					activeOpacity={0.2}
					onPress={this._onBackEvent.bind(this)}
					style={{
						backgroundColor:'#7BDBF7',
						width:100,
						height:40,
						justifyContent:'center',
						alignItems:'center',
						marginTop:20,
						borderRadius:20,
					}}
				>
					<Text>上一页</Text>
				</TouchableOpacity>
			</View>
		);
	}
	/**
	 * 点击事件
	 * @return {[type]} [description]
	 */
	_onBackEvent(){
		const {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}

} 
//导出组件，使得其他模块可以调用
module.exports = FuncFramePage;
