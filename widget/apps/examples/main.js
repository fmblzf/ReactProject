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
    Navigator,
} from 'react-native';

import Header from '../../component/header';
import NavigatorComponent from '../../component/navigator';

import HomeFramePage from './page/HomeFramePage';

class Example extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Header />
                <NavigatorComponent initialRoute={{name:'HomeFramePage',component:HomeFramePage}} />
            </View>
        );
    }
}
//导出模块使用
export default Example;