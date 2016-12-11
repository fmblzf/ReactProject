/**
 *
 * android toolbar 公共组件
 * 
 */

import React,{Component} from 'react';

import {ToolbarAndroid,StyleSheet} from 'react-native';


class Header extends Component{

	render(){
		return (
			<ToolbarAndroid
				logo={require('../img/app_img_share_icon_moments.png')}
				title="ReactProject"
				actions={[{title:'Setting',icon:require('../img/app_img_share_icon_wechat.png'),show:'always'}]}
				onActionSelected={this.onActionSelected} 
				style={styles.toolbar} />
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
  },
});

//导出组件，使得其他模块可以调用
module.exports = Header
