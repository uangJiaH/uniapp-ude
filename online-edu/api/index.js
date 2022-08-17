import {request} from '@/utils/request.js'

export function getIndexData(){
	return request({
		url:'/index',
		method:'GET'
	})
}