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

import RequestUtils from '../../../utils/RequestUtils';

/**
 * 天气预报
 */
class WeatherFrame extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        //控件挂载完成，可以在此请求服务器获取数据
        var json = RequestUtils.getAwait("http://www.sojson.com/open/api/weather/json.shtml?city=西安");
        console.log("getAwait===>>>"+JSON.stringify(json));
        RequestUtils.get("http://www.sojson.com/open/api/weather/json.shtml?city=西安",function(data){
            console.log("get===>>>"+JSON.stringify(data));
        });
        this._getWebData();
    }
    async _getWebData(){
        try {
            let respones = await fetch('http://www.sojson.com/open/api/weather/json.shtml?city=西安', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  });
            let json = await respones.json();
            console.log(json);
            alert(JSON.stringify(json))
        }catch(error){
            console.error(error);
        }
    }

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