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
 * 功能向导页
 */
class FuncFrame extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Text>扩展功能</Text>
            </View>
        );
    }
}
//导出模块使用
export default FuncFrame;