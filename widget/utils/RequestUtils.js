/**
 * 网络请求操作类
 */
class RequestUtils{
	constructor(){
	}
	/**
	 * 同步POST请求
	 * @param  {[type]} url          服务器地址
	 * @param  {[type]} requestParam 请求参数
	 * @return {[type]}              返回请求结果
	 */
	static async postAwait(url,requestParam){
		var config = {
			method:'POST',
			headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:requestParam
		};
		try{			
			let response = await fetch(url,config);
			let postdata = await response.json();
			return postdata;
		}catch(e){
			console.log(e)
		}
		return null;
	} 

	/**
	 * 异步回调POST请求
	 * @param  {[type]}   url          服务器地址
	 * @param  {[type]}   requestParam 请求参数
	 * @param  {Function} callback     回调函数
	 */
	static post(url,requestParam,callback = null,){
		var config = {
			method:'POST',
			headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:requestParam
		};
		fetch(url,config).then((response)=>{
			if (typeof callback == 'function') {
				callback(response.json());
			}
		}).catch((e)=>{
			onsole.log(e);	
		});
	}
	/**
	 * 同步GET请求
	 * @param  {[type]} url 服务器地址
	 * @return {[type]}     请求数据
	 */
	static async getAwait(url){
		try{			
			let response = await fetch(url);
			let postdata = await response.json();
			return postdata;
		}catch(e){
			console.log(e)
		}
		return null;
	}
	/**
	 * 异步回调GET请求
	 * @param  {[type]}   url      服务器地址
	 * @param  {Function} callback 回调函数
	 */
	static get(url,callback = null){
		fetch(url).then((response)=>{
			if (typeof callback == 'function') {
				callback(response.json());
			}
		}).catch((e)=>{
			onsole.log(e);	
		});
	}

}
//导出网络请求类
module.exports = RequestUtils;
