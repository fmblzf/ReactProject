/**
 *
 * IOS toolbar 公共组件
 * 
 */

import React,{Component,PropTypes} from 'react';

import {ToolbarAndroid,StyleSheet,View,StatusBar,Image,Text,Alert,TouchableOpacity} from 'react-native';

/**
 * 标题栏组件
 */
class Header extends Component{
	/**
	 * 校验型组件属性，必须的类型和是否必填的限制
	 * @type {Object}
	 */
	static propTypes = {
		title:PropTypes.string,		
		onLeftAction:PropTypes.func,
		onRightAction:PropTypes.func,
		onBackAction:PropTypes.func,
		isBackHeader:PropTypes.bool,//是否是返回标题栏
	}
	/**
	 * 渲染组件
	 */
	render(){
		return (
			<View style={styles.toolbar}>
				<View style={{flex:1,alignItems:'flex-start',}}>
					<TouchableOpacity
						activeOpacity={0.2}
						onPress={this.props.isBackHeader?this.props.onBackAction:this.props.onLeftAction}> 
						<Image 
							style={styles.imgstyle}
							source={this.props.isBackHeader?require('../img/icon_back.png'):require('../img/icon_menu_left_black.png')} 
						/>
					</TouchableOpacity> 
				</View>
				<Text style={styles.titlestyle} >
					{this.props.title?this.props.title:'ReactProject'}
				</Text>
				<View style={{flex:1,alignItems:'flex-end',}}>
					{this.props.isBackHeader?(null):
					(<TouchableOpacity
						activeOpacity={0.2}
						onPress={this.props.onRightAction}> 
						<Image 
							style={styles.imgstyle}
							source={require('../img/icon_more_black.png')} 
						/>
					</TouchableOpacity>)} 
				</View>
			</View>
		);
	}
}
/**
 * 当前组件样式类
 * @type {[type]}
 */
var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 76,//标题栏不设置高度，是不显示的
    flexDirection:'row',
    alignItems:'center',
    paddingTop:20,
  },
  imgstyle:{
  	width:24,
	height:24,
	resizeMode:'contain',
	marginLeft:15,
	marginRight:10,	
  },
  titlestyle:{
  	flex:1,
	textAlign:'center',
	fontSize:18,
	fontWeight:'bold',
  },
});

//导出组件，使得其他模块可以调用
module.exports = Header
