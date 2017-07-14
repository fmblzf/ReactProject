
import {HOST} from '../instant/Instant';

export const request = (url='',body='',method='POST')=>{
	return new Promise((resolve, reject)=>{
		fetch(HOST+url,{
			// method,
			// // headers: {
			// //    //'Accept': 'application/json',
			// //    //'Content-Type': 'application/json',
			// //    //'Content-Type': 'application/x-www-form-urlencoded',
			// //    'Content-Type':'text/plain;charset=UTF-8'
			// // },
			// body
		}).then((response)=>{
			console.log(response)
			return response.json();
		}).then((responseJson)=>{
			resolve(responseJson);
		}).catch((error)=>{
			console.log(error.message);
			reject(error);
		});
	});
}
/**
 * 文件上传
 * url 接口路径
 * uri 文件路径
 * filename 文件名称
 */
export const upload = (url,uri,filename)=>{
	let formData = new FormData();
	let file = {uri:uri,type:'multipart/form-data',name:filename};
	formData.append('images',file);
	return new Promise((resolve,reject)=>{
		fetch(url,{
			method:'POST',
			header:{
				'Content-Type':'multipart/form-data',
			},
			body:formData,
		})
		.then((response)=>{
			return response.text();
		})
		.then((responeData)=>{
			console.log(responeData);
			resolve(responeData)
		})
		.catch((error)=>{
			console.warn('File upload Failed ',error);
			reject(error)
		});
	});
}