import React,{Component} from 'react';
import {Animated} from 'react-native';
/**
 *
 * 动画类编写
 *  
 */
class Playground extends Component{
	//构造器
	constructor(props) {
	  super(props);	
	  this.state = {
	  	bounceValue:new Animated.Value(0),
	  };
	}
	//界面UI渲染
	render(){
		return (
			<Animated.Image					//可选组件 Image,View,Text
				source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
				style={{
					flex:1,
					transform:[
						{scale:this.state.bounceValue},
					]
				}}
			/>
		);
	}

	//渲染结束后直接执行的操作,或者通俗的说是组件装载完成之后执行该操作
	componentDidMount(){
		this.state.bounceValue.setValue(1.5);
		Animated.spring(					//可选的基本动画类型：spring,decay,timing
			this.state.bounceValue,			//将bounceValue的值动画化
			{
				toValue:0.8,
				friction:1,
			}
		).start();
	}

	//组件将被卸载时，回调函数
	componentWillUnmount(){
		//该操作可以，清除一些操作防止程序崩溃，比如清除当前组件中的定时器
	}
}

module.exports = Playground
