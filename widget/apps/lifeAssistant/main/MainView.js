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
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'news'}
                        title="新闻"
                        renderIcon={()=>this._getTabIcon('news',false)}
                        renderSelectedIcon={()=>this._getTabIcon('news',true)}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'news' ,title:'新闻'})}>
                        {<NewsFrame />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'weather'}
                        title="天气"
                        renderIcon={()=>this._getTabIcon('weather',false)}
                        renderSelectedIcon={()=>this._getTabIcon('weather',true)}
                        renderBadge={() => <View />}
                        onPress={() => this.setState({ selectedTab: 'weather' ,title:'天气'})}>
                        {<WeatherFrame/>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'relax'}
                        title="放松"
                        renderIcon={()=>this._getTabIcon('relax',false)}
                        renderSelectedIcon={()=>this._getTabIcon('relax',true)}
                        renderBadge={() => <View />}
                        onPress={() => this.setState({ selectedTab: 'relax' ,title:'放松'})}>
                        {<RelaxFrame/>}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'func'}
                        title="功能"
                        renderIcon={()=>this._getTabIcon('func',false)}
                        renderSelectedIcon={()=>this._getTabIcon('func',true)}
                        renderBadge={() => <View />}
                        onPress={() => this.setState({ selectedTab: 'func',title:'功能' })}>
                        {<FuncFrame/>}
                    </TabNavigator.Item>
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