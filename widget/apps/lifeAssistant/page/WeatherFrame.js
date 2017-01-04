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
 * 天气预报
 */
class WeatherFrame extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Text>天气预报</Text>
            </View>
        );
    }
}
//导出模块使用
export default WeatherFrame;