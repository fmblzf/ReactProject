/**
 * 本地缓存操作
 */
var ReactNative = require('react-native');

var {AsyncStorage} = ReactNative;
/**
 * 根据key获取本地缓存的值
 * @param  key 
 * @return value
 */
var getItem = (key)=>{
	return AsyncStorage.getItem(key)
	.then((result)=>{
		return result;
	})
	.catch((error)=>{
		console.error(error);
		throw error;
	});
}
/**
 * 将key的值设置成value
 * @param  key
 * @param  value
 * @return void
 */
var setItem = (key,value)=>{
	return AsyncStorage.setItem(key,value)
	.catch((e)=>{
		console.error(e);
		throw e;
	});
}
/**
 * 删除指定的item
 * @param  key
 * @return void
 */
var removeItem = (key)=>{
	return AsyncStorage.removeItem(key)
	.catch((e)=>{
		console.error(e);
		throw e;
	})
}
var mergeItem = ()=>{}
var clear = ()=>{}
var getAllKeys = ()=>{}
var flushGetRequests = ()=>{}
var multiGet = ()=>{}
var multiSet = ()=>{}
var multiRemove = ()=>{}
var multiMerge = ()=>{}
var Storage = {
	getItem:getItem,
	setItem:setItem,
	removeItem:removeItem,
	mergeItem:mergeItem,
	clear:clear,
	getAllKeys:getAllKeys,
	flushGetRequests:flushGetRequests,
	multiGet:multiGet,
	multiSet:multiSet,
	multiRemove:multiRemove,
	multiMerge:multiMerge,	
}
//导出模块，可被调用
module.exports = Storage;
