import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Text,
    ListView,
} from 'react-native';

/**
 * 新闻列表页组件
 */
class CustomListView extends Component{
    static propTypes = {
        type:PropTypes.string,
    }

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            ds,
        }
        this._data = [1,2,3,4,5,6];
    }

    /**
     * 当前组件挂载完成之后执行的方法
     */
    componentDidMount(){
        this._getWebData();
    }

    /**
     * 拼接新数据
     * @param newData
     * @private
     */
    _onDataArrived = (newData)=>{
        this._data.concat(newData);
        console.log('ds=='+JSON.stringify(newData));
        this.setState({
            ds:this.state.ds.cloneWithRows(this._data),
        });
    }
    /**
     * 获取网络数据
     * @returns 返回json对象
     * @private
     */
    async _getWebData(){
        try {
            let respones = await fetch('http://v.juhe.cn/toutiao/index', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:'type='+this.props.type+'&key=dd7bba438f17877f6790d49087424418',
            });
            let json = await respones.json();
            console.log(json);
            // return json.result['data'];
            this._onDataArrived(json.result['data']);
        }catch(e){
            console.log(e);
        }
    }

    render(){
        return (
            <ListView
                dataSource={this.state.ds}
                renderRow={(rowData) => this._getRowRenderComponent(rowData)}
                enableEmptySections = {true}
            />
        );
    }

    /**
     * 返回ListView的每一行的控件
     * @param rowData
     * @returns {XML}
     * @private
     */
    _getRowRenderComponent = (rowData)=>{
        return <Text>测试</Text>
    }
}

export default CustomListView;