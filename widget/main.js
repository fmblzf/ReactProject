/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
/**
 *
 * 备注：
 * 在文件夹apps下创建不同的app项目，
 * 只需要在该处调用不同的组件就可以，
 * 并且将调用组件的名称替换即可。
 *
 *
 */
import LifeAssistant from './apps/lifeAssistant/main';

class Main extends Component {
  render(){
    return (
        <LifeAssistant />
    );
  }
}
//导出模块使用
export default Main;