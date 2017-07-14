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
	Image,
	TouchableOpacity,
} from 'react-native';

/**
 * 功能组件
 */
class FlexboxFramePage extends Component{
	/**
	 * 渲染组件
	 * @return 返回组件
	 */
	render(){
		console.log(this.props)
		let picUrl = {uri:"http://04.imgmini.eastday.com/mobile/20170713/20170713_45a6838aa79a52a7e189b2add160fa01_cover_mwpm_03200403.jpeg"};
		return (
			// <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
				// <TouchableOpacity onPress={this.onPress}
				// 	style={{marginTop:10,justifyContent:'center',alignItems:'center',backgroundColor:'#aef',borderRadius:3,width:100,height:40}}>
				// <Text>样式转换</Text>
				// </TouchableOpacity>
				<View style={{flexDirection:'row',flex:1,height:80,padding:10}}>
					<Image source={picUrl} style={{width:60,height:60,borderRadius:5}}></Image>
					<View style={{paddingLeft:10}} >
						<Text style={{fontSize:12,color:'#000',paddingTop:5}} >从“崂山道士观”到“青岛院士港” 这里迎全球最强大脑</Text>
						<View style={{flexDirection:'row',paddingTop:5}}>
						<Text style={{fontSize:10}} >作者：</Text><Text style={{fontSize:10}}>中国青年报</Text>
						</View>
						<View style={{flexDirection:'row',paddingTop:5}}>
						<Text style={{fontSize:10}}>时间：</Text><Text style={{fontSize:10}}>2017-07-13 12:57</Text>
						</View>						
					</View>
				</View>
			// </View>
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
module.exports = FlexboxFramePage;
