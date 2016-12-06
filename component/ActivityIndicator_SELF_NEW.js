'use strict'

import React,{Component} from 'react'
import {StyleSheet,ActivityIndicator,View} from 'react-native'

/**
 * Optional Flowtype state and timer types definition
 */
type State = {animating:boolean;};
type Timer = number;

class ActivityIndicatorNew extends Component{

	/**
	 * Optional Flowtype state and timer types 
	 */
	state:State;
	_timer:Timer;
	/**
	 * @param  {props} props属性
	 * @return {[type]}
	 */
	constructor(props){
		super(props)
		this.state = {
			animating:true,
		}
	}
	/**
	 * 组件装载完成之后执行的回调
	 */
	componentDidMount(){
		this.setToggleTimeout();
	}
	/**
	 * 组件卸载之前执行的回调
	 */
	componentWillUnmount(){
		clearTimeout(this._timer);
	}
	/**
	 * 设置打开关闭定时器
	 */
	setToggleTimeout(){
		this._timer = setTimeout(()=>{
			this.setState({animating:!this.state.animating});
			this.setToggleTimeout()
		},2000);
	}
	/**
	 * 渲染模板组件
	 * @return 返回组件UI
	 */
	render(){
		return (
			<ActivityIndicator
				animating={this.state.animating}
				style={[styles.centering,{transform:[{scale:1.5}]}]}
				size="large"
			/>
		);
	}
}
/**
 * 样式常量
 * @type {[type]}
 */
const styles = StyleSheet.create({
	centering:{
		alignItems:'center',
		justifyContent:'center',
		padding:8,
	},
	gray:{
		backgroundColor:'#cccccc',
	},
	horizontal:{
		flexDirection:'row',
		justifyContent:'space-around',
		padding:8,
	},
});

module.exports = ActivityIndicatorNew

