/**
 *
 * android toolbar 公共组件
 * 
 */

import React,{Component} from 'react';

import {ToolbarAndroid,StyleSheet,View,StatusBar,Image,Text} from 'react-native';


class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			hidden:false,
		}
	}

	componentDidMount = ()=>{
		this.setState({
			hidden:false,
		});
	}	

	_render(){
		return (
			<View>
				<StatusBar
				    hidden={this.state.hidden} />
				<ToolbarAndroid
					logo={require('../img/icon_menu_left_black.png')}
					title="ReactProject"
					actions={[{title:'Setting',icon:require('../img/icon_more_black.png'),show:'always'}]}
					onActionSelected={this.onActionSelected} 
					style={styles.toolbar} />
			</View>
		);
	}

	render(){
		return (
			<View style={styles.toolbar}>
				<Image 
					style={{
							flex:1,
							justifyContent:'flex-start',
							marginRight:10,
							width:16,
							height:16,
						}}
					source={require('../img/icon_menu_left_black.png')} 
				/>
				<Text
					style={{
						flex:1,
						justifyContent:'center',
					}}
				>
					ReactProject
				</Text>
				<Image 
					style={{
							flex:1,
							justifyContent:'flex-end',
							marginRight:10,
							height:56,
						}}
					source={require('../img/icon_more_black.png')} 
				/>
			</View>
		);
	}

	onActionSelected(position){
		if (position === 0) {
		}
	}
}
/**
 * 标题栏不设置高度，是不显示的
 * @type {[type]}
 */
var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
});

//导出组件，使得其他模块可以调用
module.exports = Header
