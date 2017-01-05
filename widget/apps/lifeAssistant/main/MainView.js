/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


import Header from '../../../component/header';
import NewsFrame from '../page/NewsFrame';
import WeatherFrame from '../page/WeatherFrame';
import RelaxFrame from '../page/RelaxFrame';
import FuncFrame from '../page/FuncFrame';

class MainView extends Component {

    static propTypes = {
        titleLeftAction:PropTypes.func,
    }

    constructor(props){
        super(props);
        this.state = {
            title:'新闻',
            selectedTab:'news',
        };
    }

    render () {
        return (
            <View style={{flex:1}}>
                <Header title={this.state.title} onLeftAction={this._leftAction} />
                <TabNavigator>
                    {this._getTabNavigatorItem('news','新闻',<NewsFrame/>)}
                    {this._getTabNavigatorItem('weather','天气',<WeatherFrame/>)}
                    {this._getTabNavigatorItem('relax','娱乐',<RelaxFrame/>)}
                    {this._getTabNavigatorItem('func','功能',<FuncFrame/>)}
                </TabNavigator>
            </View>
        )
    }

    /**
     * 右边标题栏图标点击事件
     * @private
     */
    _leftAction = ()=>{
        if (typeof this.props.titleLeftAction == 'function'){
            this.props.titleLeftAction();
        }

    }
    /**
     * 获取TabNavigator的子组件
     * @param type tab类型
     * @param curtitle tabbar的标题
     * @param component tabItem对应的子视图
     * @param selectedTitle 选中时对应的标题栏标题
     * @returns {XML}
     * @private
     */
    _getTabNavigatorItem = (type,curtitle,component,selectedTitle)=>{
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === type}
                title={curtitle}
                renderIcon={()=>this._getTabIcon(type,false)}
                renderSelectedIcon={()=>this._getTabIcon(type,true)}
                renderBadge={() => <View />}
                onPress={() => this.setState({ selectedTab: type ,title:selectedTitle?selectedTitle:curtitle})}>
                {component}
            </TabNavigator.Item>
        );
    }
    /**
     * 获取图标
     * @param type tab类型
     * @param isselected 是否选中
     * @returns {XML} 返回<Image>组件
     * @private
     */
    _getTabIcon = (type,isselected)=>{
        var source = "";
        if (type == 'news'){
            source = isselected?require('../img/tab_icon_news_selected.png'):require('../img/tab_icon_news.png');
        }else if (type == 'weather'){
            source = isselected?require('../img/tab_icon_weather_selected.png'):require('../img/tab_icon_weather.png');
        }else if (type == 'relax'){
            source = isselected?require('../img/tab_icon_relax_selected.png'):require('../img/tab_icon_relax.png');
        }else if (type == 'func'){
            source = isselected?require('../img/tab_icon_func_selected.png'):require('../img/tab_icon_func.png');
        }
        return <Image source={source} style={{width:20,height:20}} />;
    }
}
//导出模块使用
export default MainView;