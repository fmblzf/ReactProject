/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    ScrollView ,
} from 'react-native';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class ControlPanel extends Component {
    render () {
        return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'column',alignItems:'center',marginTop:20,marginBottom:20,}}>
                <Image source={require('../img/icon_preson.png')} />
                <Text style={{marginTop:10,}}>Admin</Text>
            </View>
            <ScrollView>
                <View style={style.item}>
                    <Image source={require('../img/icon_setting.png')} style={style.item_img} />
                    <Text>个人中心</Text>
                </View>
                <View style={style.item}>
                    <Image source={require('../img/icon_setting.png')} style={style.item_img} />
                    <Text>设置  </Text>
                </View>

            </ScrollView>
        </View>
        )
    }
}
/**
 * 创建样式
 * @type {{}}
 */
const style = StyleSheet.create({
    item:{
        borderTopWidth:1,
        borderTopColor:'#999',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
    },
    item_img:{
        width:18,
        height:18,
        marginRight:15,
    },
});
//导出模块使用
export default ControlPanel;