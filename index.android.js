/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';


class ReactProjects extends Component{

    render(){
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width:193,height:110}} />
      );
    }

}

class Greeting extends Component{
  render(){
    return (
        <Text>
          Hello {this.props.name}!
        </Text>
    );
  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText:true};
    //设置定时器每1秒做一次取反
    // setInterval(()=>{
    //   this.setState({showText:this.state.showText});
    // },1000)
  }
  render(){
    let display = this.state.showText?this.props.text:'';
    return (
      <Text>{display}</Text>
    );

  }
}

class FixedDimensionsBasics extends Component{
  render(){
    return (
      <View>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}} />
        <View style={{width:100,height:100,backgroundColor:'skyblue'}} />
        <View style={{width:150,height:150,backgroundColor:'steelblue'}} />
      </View>
    );
  }
}
class FixedBasics extends Component{
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'powderblue'}} />
        <View style={{flex:2,backgroundColor:'skyblue'}} />
        <View style={{flex:3,backgroundColor:'steelblue'}} />
      </View>
    );
  }
}
class FixedDirectionBasicesLayout extends Component{
  render(){
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'stretch',backgroundColor:'red'}}>
        <View style={{height:50,backgroundColor:'powderblue'}} />
        <View style={{height:50,backgroundColor:'skyblue'}} />
        <View style={{height:50,backgroundColor:'steelblue'}} />
      </View>
    );
  }
}
class PizzTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  render(){
    return (
      <View style={{padding:10}}>
        <TextInput style={{height:40}} placeholder="Type here to translate!" 
          onChangeText={(text)=>this.setState({text})}
        />
        <Text style={{padding:10,fontSize:42}} >
          {this.state.text.split(' ').map((word)=>word&&'🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
  render(){
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>if you like </Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Image source={require('./img/fav.png')} />
        <Text style={{fontSize:96}}>React Native</Text>
      </ScrollView>
    );
  }
}
class ListViewBasics extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state = {
      dataSource:ds.cloneWithRows([
        'John','Joel','Aslice','Slice','Python','Dvide','Sfsf','Mkkiuhai'
      ])
    };
  }
  render(){
    return (
      <View style={{flex:1,paddingTop:22}}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData)=><Text style={{height:100}}>{rowData}</Text>}
         />
      </View>
    );
  }
}
class ReactProject extends Component{
  render(){
    return (
      <ListViewBasics />

      
    );
  }
}

const style = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red',
  },
});


AppRegistry.registerComponent('ReactProject', () => ReactProject);
