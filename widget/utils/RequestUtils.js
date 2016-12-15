/**
 * 网络请求操作
 */
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

