/**
 *  android,ios公用的导航栏组件
 */
import React,{Component} from 'react';
import {
	Navigator,
} from 'react-native';

/**
 * 导航栏组件
 */
class NavigatorComponent extends Component{

	/**
	 * 渲染组件
	 * @return 导航栏组件
	 */
	render(){		
		return (
			<Navigator
				style={{flex:1}}
				initialRoute={this.props.initialRoute}
				configureScene={this.configureScene}
				renderScene={this.renderScene}
			/>
		);
	}
	/**
	 * 配置界面切换的动画效果
	 * @param  route 路由中携带的系统参数以及initialRoute中的参数
	 * @param  routeStack 路由栈
	 * @return       场景切换的动画组件
	 */
	configureScene(route,routeStack){
		if (route.type == 'Bottom') {
			//地步弹出
			return Navigator.SceneConfigs.FloatFromBottom;
		}else{
			//右侧弹出
			return Navigator.SceneConfigs.PushFromRight;
		}
	}
	/**
	 * 使用组件渲染场景
	 * @param  route     路由中携带的系统参数以及initialRoute中的参数
	 * @param  navigator Navigator对象
	 * @return           渲染场景的组件
	 */
	renderScene(route,navigator){
		//{...route.params} 语法含义是，将params中的每一个key作为props传递到下一个界面
		//navigator   将Navigator对象作为props传递到renderScene渲染组件中
		let Component = route.component;
		//下面的Component实际上是上面的常量Component
		return <Component {...route.params} navigator={navigator} />
	}
}

//导出组件，使得其他模块可以调用
module.exports = NavigatorComponent;

