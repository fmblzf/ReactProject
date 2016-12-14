/**
 * 网络请求操作
 */
import {HOST} from '../instant/Instant';

export const request = (url='',body='',method='POST')=>{

	return new Promise((resolve, reject)=>{
		fetch(HOST+url,{
			method:method,
			headers: {
			   'Accept': 'application/json',
			   'Content-Type': 'application/json',
			},
			body:body
		}).then((response)=>{
			return response.json();
		}).then((responseJson)=>{
			resolve(responseJson);
		}).catch((error)=>{
			alert(123)
			console.log(error.message);
			reject(error);
		});
	});
}

