/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    View,
    Text,
} from 'react-native';

/**
 * 新闻页
 */
class NewsFrame extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Text>新闻</Text>
            </View>
        );
    }
}
//导出模块使用
export default NewsFrame;