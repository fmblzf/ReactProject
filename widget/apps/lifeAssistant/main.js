/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';

import Drawer from 'react-native-drawer';

import ControlPanel from './main/ControlPanel';
import MainView from './main/MainView';

class LifeAssistant extends Component {
    /**
     * 关闭侧滑栏
     */
    closeControlPanel = () => {
        this._drawer.close()
    };
    /**
     * 打开侧滑栏
     */
    openControlPanel = () => {
        //如果侧滑栏已经打开，则就关闭
        this._drawer.open()
    };
    render () {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<ControlPanel />}
                open={false}
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.4} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >

                <MainView titleLeftAction={this.openControlPanel} />
            </Drawer>
        )
    }
}
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}
//导出模块使用
export default LifeAssistant;