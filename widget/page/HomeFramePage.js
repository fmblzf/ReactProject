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
import Storage from '../utils/StorageUtils';
import Sqlite from '../utils/SqliteUtils';

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
			<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
				<Text>
					首页
				</Text>
				<TouchableOpacity 
					activeOpacity={0.2}
					onPress={this._onPressEvent.bind(this)}
					style={{
						backgroundColor:'#7BDBF7',
						width:100,
						height:40,
						justifyContent:'center',
						alignItems:'center',
						marginTop:20,
						borderRadius:20,
					}}>
					<Text>下一页</Text>
				</TouchableOpacity>

				<TouchableHighlight
					onPress={this.fetchData}
					delayLongPress={null}
					underlayColor='#CEF0FA'
					style={{
						backgroundColor:'#7BDBF7',
						width:100,
						height:40,
						justifyContent:'center',
						alignItems:'center',
						marginTop:20,
						borderRadius:20,
					}} >
					<View>
						<Text style={{
							color:'#fff',
						}}>获取数据</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={this.cacheData}
					underlayColor='#CEF0FA'
					style={{
						backgroundColor:'#7BDBF7',
						width:100,
						height:40,
						justifyContent:'center',
						alignItems:'center',
						marginTop:20,
						borderRadius:20,
					}} >
					<Text>缓存数据</Text>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={this.operaDb}
					underlayColor='#CEF0FA'
					style={{
						backgroundColor:'#7BDBF7',
						width:100,
						height:40,
						justifyContent:'center',
						alignItems:'center',
						marginTop:20,
						borderRadius:20,
					}} >
					<Text>数据库操作</Text>
				</TouchableHighlight>
			</View>
		);
	}
	/**
	 * 操作数据库
	 * @return {[type]} [description]
	 */
	operaDb = ()=>{
		var sql = 'select * from cy_com_district where id<? ;';
		var params = [8]; 
		Sqlite.executeSql(sql,params)
		.then((data)=>{
			var result = Sqlite.convertJson(data);
			console.log(JSON.stringify(result));
			alert(JSON.stringify(result));
		})
		.catch((error)=>{
			console.log(error);
			alert(error.message);
		})
		
	}
	/**
	 * 缓存数据
	 * @return {[type]} [description]
	 */
	cacheData = ()=>{
		Storage.setItem('userid','23456');
		Storage.getItem('userid')
		.then((value)=>{
			alert(value);
		});
	}
	/**
	 * 获取数据
	 * @return {[type]} [description]
	 */
	fetchData = ()=>{
		request().then((responseJson)=>{
			console.log(JSON.stringify(responseJson));
			alert(responseJson.total);
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
