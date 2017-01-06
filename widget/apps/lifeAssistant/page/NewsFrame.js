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
    Text,
    ListView,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CustomListView from '../../../component/listview';
/**
 * 新闻页
 */
class NewsFrame extends Component {
    render(){
        return (
            <ScrollableTabView
            >
                <CustomListView tabLabel='头条' type='top' />
                <CustomListView tabLabel='社会' type='shehui' />
                <CustomListView tabLabel='国内' type='guonei' />
                <CustomListView tabLabel='国际' type='guoji' />
                <CustomListView tabLabel='娱乐' type='yule' />
                <CustomListView tabLabel='体育' type='tiyu' />
                <CustomListView tabLabel='军事' type='junshi' />
                <CustomListView tabLabel='科技' type='keji' />
                <CustomListView tabLabel='财经' type='caijing' />
                <CustomListView tabLabel='时尚' type='shishang' />
            </ScrollableTabView>
        );
    }
}

//导出模块使用
export default NewsFrame;