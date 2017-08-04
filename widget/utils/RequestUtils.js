/**
 * 网络请求操作类
 */
class RequestUtils{
	constructor(){
	}
	/**
	 * 同步POST请求
	 * @param  {[type]} url          [服务器请求服务器地址]
	 * @param  {[type]} param        [请求参数]
	 * @param  {[type]} bodyHandler  [请求参数的处理方法]
	 * @return {[Promise]}           [返回值]
	 */
	static async postAwait(url,param,bodyHandler=null){
		var body = "";
		if (param) {
			body = JSON.stringify(param);
			if (bodyHandler && typeof bodyHandler == 'function') {
				body = bodyHandler(param);
			}
		}
		var config = {
			method:'POST',
			headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:body
		};
		try{			
			let response = await fetch(url,config);
			let postdata = await response.json();
			return postdata;
		}catch(error){
			console.error(error);
		}
		return null;
	} 
	/**
	 * 异步回调POST请求
	 * @param  {[type]} url          [服务器请求服务器地址]
	 * @param  {[type]} param        [请求参数]
	 * @param  {[type]} bodyHandler  [请求参数的处理方法]
	 * @return {[Promise]}           [返回值]
	 */
	static post(url,param=null,bodyHandler=null){
		var body = "";
		if (param) {
			body = JSON.stringify(param);
			if (bodyHandler && typeof bodyHandler == 'function') {
				body = bodyHandler(param);
			}
		}
		
		var config = {
			method:'POST',
			headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:body,
		};
		return fetch(url,config).then((response)=>response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
        	console.error(error);
      	});
	}
	/**
	 * 同步GET请求
	 * @param  {[type]} url          [服务器请求服务器地址]
	 * @param  {[type]} param        [请求参数]
	 * @param  {[type]} paramHandler [请求参数的处理方法]
	 * @return {[Promise]}           [返回值]
	 */
	static async getAwait(url,param=null,paramHandler=null){
		var config = {
			method:'GET'
		};
		if(param){			
			if (paramHandler && typeof paramHandler == 'function') {
				url = url + paramHandler(param);
			}else{
				url = url+"?"+_param(param);
			}
		}
		try{			
			let response = await fetch(url,config);
			let postdata = await response.json();
			return postdata;
		}catch(error){
			console.error(error);
		}
		return null;
	}
	/**
	 * 异步回调GET请求
	 * @param  {[type]} url          [服务器请求服务器地址]
	 * @param  {[type]} param        [请求参数]
	 * @param  {[type]} paramHandler [请求参数的处理方法]
	 * @return {[Promise]}           [返回值]
	 */
	static get(url,param = null,paramHandler=null){
		var config = {
			method:'GET'
		};
		if(param){			
			if (paramHandler && typeof paramHandler == 'function') {
				url = url + paramHandler(param);
			}else{
				url = url+"?"+_param(param);
			}
		}
		return fetch(url,config).then((response)=>response.json())
		.then((responseJson)=>{
			return responseJson;
		})
		.catch((error)=>{
			console.error(error);
		});
	}

}
/**
 * 请求参数处理方法
 * @param  {Object} obj [处理对象]
 * @return {[type]}     [处理后的结果]
 */
function _param(obj = {}) {
    let _ = encodeURIComponent
    return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
}
RequestUtils.paramFunc = _param
//导出网络请求类
export default RequestUtils;
