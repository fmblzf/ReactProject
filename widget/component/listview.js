import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Text,
    ListView,
    Image,
} from 'react-native';

/**
 * 新闻列表页组件
 */
class CustomListView extends Component{
    static propTypes = {
        type:PropTypes.string,
        rowComponent:PropTypes.func,
        fetchMethod:PropTypes.func,
    }

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            dataSource:ds,
        }
        this._data = [];
    }

    /**
     * 当前组件挂载完成之后执行的方法
     */
    componentDidMount(){
        if (typeof this.props.fetchMethod == 'function') {
            var that = this;
            this.props.fetchMethod().then((data)=>{
                that._onDataArrived(data);
            }).catch((e)=>{
                console.log(e);
            })
            return ;
        }
        this._getWebData();
    }

    /**
     * 拼接新数据
     * @param newData
     * @private
     */
    _onDataArrived(newData){
        //this._data.concat(newData);
        for(var i = 0;i<newData.length;i++){
            this._data.push(newData[i]);
        }
        //console.log(newData);
        //console.log('_data=='+JSON.stringify(this._data));
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this._data),
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
                dataSource={this.state.dataSource}
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
        if (typeof this.props.rowComponent == 'function') {
            return this.props.rowComponent(rowData);
        }                
        return (
            <View style={{flexDirection:'row',flex:1,height:80,padding:10}}>
                    <Image source={{uri:rowData.thumbnail_pic_s}} style={{width:60,height:60,borderRadius:5}}></Image>
                    <View style={{paddingLeft:10}} >
                        <Text style={{fontSize:12,color:'#000',paddingTop:5}} >{rowData.title.length>16?(rowData.title.substring(0,16)+"..."):rowData.title}</Text>
                        <View style={{flexDirection:'row',paddingTop:5}}>
                        <Text style={{fontSize:10}} >来源：</Text><Text style={{fontSize:10}}>{rowData.author_name}</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:5}}>
                        <Text style={{fontSize:10}}>时间：</Text><Text style={{fontSize:10}}>{rowData.date}</Text>
                        </View>                     
                    </View>
                </View>
        );
    }
}

export default CustomListView;